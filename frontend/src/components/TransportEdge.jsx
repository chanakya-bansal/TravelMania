import { BaseEdge,EdgeLabelRenderer,getBezierPath,useReactFlow,} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const TransportEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, label, style }) => {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });

    return (
        <>
            <BaseEdge path={edgePath} style={style} />
            <EdgeLabelRenderer>
                <div
                    className="edge-label-wrapper"
                    style={{ transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)` }}
                >
                    {label && <span className="edge-label__text">{label}</span>}
                    <button
                        className="edge-label__delete"
                        onClick={() => setEdges((es) => es.filter((e) => e.id !== id))}
                        title="Delete connection"
                    >
                        ×
                    </button>
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default TransportEdge;
