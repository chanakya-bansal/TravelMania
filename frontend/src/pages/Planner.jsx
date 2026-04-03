import { useState, useCallback, useRef } from 'react';
import {ReactFlow,applyNodeChanges,applyEdgeChanges,addEdge,Background,BackgroundVariant,Handle,
    Position,BaseEdge,EdgeLabelRenderer,getBezierPath,useReactFlow,} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '../styles/Planner.css';
import Restaurant from "../assets/images/restaurant.png"
import Hotel from "../assets/images/hotel.png"
import Entertainment from "../assets/images/entertainment.png"
import Home from "../assets/images/home.png"
import ToolBar from '../components/ToolBar';
import EditModal from '../components/EditModal';
import TransportModal from '../components/TransportModal';
import TravelNode from '../components/TravelNode';
import TransportEdge from '../components/TransportEdge';

export const NODE_DATA = {
    hotel:         { label: 'Hotel',         icon: Hotel,          type: 'hotel' },
    restaurant:    { label: 'Restaurant',    icon: Restaurant,     type: 'restaurant' },
    entertainment: { label: 'Entertainment', icon: Entertainment,  type: 'entertainment' },
    home:          { label: 'Home',          icon: Home,           type: 'home' },
};

let _id = 20;
const uid = () => `node_${_id++}`;

const nodeTypes = { travel: TravelNode };
const edgeTypes = { transport: TransportEdge };

// default data
const initialNodes = [
    { id: 'n1', type: 'travel', position: { x: 50,   y: 600 }, data: { type: 'home',          label: 'Home',          note: 'Pune' } },
    { id: 'n2', type: 'travel', position: { x: 400,  y: 600 }, data: { type: 'hotel',         label: 'Radisson Blue', note: 'Check in at 1:00pm' } },
    { id: 'n3', type: 'travel', position: { x: 700,  y: 700 }, data: { type: 'restaurant',    label: 'White Oak',     note: 'North Indian' } },
    { id: 'n4', type: 'travel', position: { x: 700,  y: 500 }, data: { type: 'restaurant',    label: 'En Voyage',     note: 'French' } },
    { id: 'n5', type: 'travel', position: { x: 1000, y: 600 }, data: { type: 'entertainment', label: 'Red Fort',      note: 'Entry before 5:00pm' } },
];

const edgeStyle = { stroke: '#ff6670', strokeWidth: 3 };

const makeEdge = (id, source, target, transport = '') => ({
    id,
    source,
    target,
    type: 'transport',
    animated: true,
    style: edgeStyle,
    label: transport || '',
    labelStyle: { fill: '#ff6670', fontWeight: 600, fontSize: 11 },
    labelBgStyle: { fill: '#fff0f0', rx: 6 },
    labelBgPadding: [6, 4],
    data: { transport },
});

// default edges
const initialEdges = [
    makeEdge('e1', 'n1', 'n2', 'Flight · 9:00 AM'),
    makeEdge('e2', 'n2', 'n3', 'Taxi · 15 min'),
    makeEdge('e3', 'n2', 'n4', 'Metro · 30 min'),
    makeEdge('e4', 'n3', 'n5', 'Metro · 40 min'),
    makeEdge('e5', 'n4', 'n5', 'Uber · 1 Hour'),
];

export default function Planner() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [editingNode, setEditingNode] = useState(null);
    const [editingEdge, setEditingEdge] = useState(null);
    const reactFlowWrapper = useRef(null);
    const [rfInstance, setRfInstance] = useState(null);

    const deleteNode = useCallback((id) => {
        setNodes((ns) => ns.filter((n) => n.id !== id));
        setEdges((es) => es.filter((e) => e.source !== id && e.target !== id));
        setEditingNode(null);
    }, []);

    const nodesWithCbs = nodes.map((n) => ({
        ...n,
        data: { ...n.data, onDelete: deleteNode },
    }));

    const onNodesChange = useCallback(
        (changes) => setNodes((ns) => applyNodeChanges(changes, ns)),
        [],
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((es) => applyEdgeChanges(changes, es)),
        [],
    );

    const onConnect = useCallback(
        (params) => {
            const newEdge = makeEdge(`e_${Date.now()}`, params.source, params.target, '');
            setEdges((es) => addEdge(newEdge, es));
            setEditingEdge(newEdge);
        },
        [],
    );

    const onNodeClick = useCallback((_, node) => {
        setEditingNode(node);
    }, []);

    const onEdgeClick = useCallback((_, edge) => {
        setEditingEdge(edge);
    }, []);

    const handleNodeSave = useCallback((id, label, note) => {
        setNodes((ns) =>
            ns.map((n) => (n.id === id ? { ...n, data: { ...n.data, label, note } } : n)),
        );
        setEditingNode(null);
    }, []);

    const handleTransportSave = useCallback((id, transport) => {
        setEdges((es) =>
            es.map((e) =>
                e.id === id
                    ? { ...e, label: transport, data: { ...e.data, transport } }
                    : e,
            ),
        );
        setEditingEdge(null);
    }, []);

    const addNode = useCallback(
        (type) => {
            const center = rfInstance
                ? rfInstance.screenToFlowPosition({
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2,
                })
                : { x: 200 + Math.random() * 200, y: 200 + Math.random() * 200 };

            const newNode = {
                id: uid(),
                type: 'travel',
                position: {
                    x: center.x - 85 + (Math.random() - 0.5) * 60,
                    y: center.y - 40 + (Math.random() - 0.5) * 60,
                },
                data: {
                    type,
                    label: `New ${NODE_DATA[type].label}`,
                    note: '',
                },
            };
            setNodes((ns) => [...ns, newNode]);
        },
        [rfInstance],
    );

    return (
        <div className="app-wrapper">
            <ToolBar onAdd={addNode} />

            <div className="canvas-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodesWithCbs}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={onNodeClick}
                    onEdgeClick={onEdgeClick}
                    onInit={setRfInstance}
                    fitView
                    deleteKeyCode="Delete"
                    defaultEdgeOptions={{ type: 'transport', style: edgeStyle, animated: true }}
                >
                    <Background
                        variant={BackgroundVariant.Dots}
                        gap={20}
                        size={2.5}
                        color="#c8c4bb"
                    />
                </ReactFlow>

                {editingNode && (
                    <EditModal
                        node={editingNode}
                        onSave={handleNodeSave}
                        onDelete={deleteNode}
                        onClose={() => setEditingNode(null)}
                    />
                )}

                {editingEdge && (
                    <TransportModal
                        edge={editingEdge}
                        onSave={handleTransportSave}
                        onClose={() => setEditingEdge(null)}
                    />
                )}
            </div>
        </div>
    );
}