import {Handle, Position,} from '@xyflow/react';
import { NODE_DATA } from "../pages/Planner";


function TravelNode({ id, data, selected }) {
    const meta = NODE_DATA[data.type];
    const cls = [
        'travel-node',
        `travel-node--${data.type}`,
    ].join(' ');

    return (
        <div className={cls} style={{ position: 'relative' }}>
            <Handle type="target" position={Position.Left} />

            <button
                className="travel-node__delete"
                onClick={(e) => {
                    e.stopPropagation();
                    data.onDelete(id);
                }}
                title="Delete node"
            >
                ×
            </button>

            <div className="travel-node__header">
                <div className="travel-node__icon-wrap">
                    <img src={meta.icon} alt={meta.label} width={20} height={20} />
                </div>
                <div className="travel-node__meta">
                    <div className="travel-node__type">{meta.label}</div>
                    <div className="travel-node__label">{data.label}</div>
                </div>
            </div>

            {data.note && <div className="travel-node__note">{data.note}</div>}

            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default TravelNode;
