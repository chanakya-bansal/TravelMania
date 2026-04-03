
import { NODE_DATA } from "../pages/Planner";


const Toolbar = ({ onAdd }) => (
    <div className="toolbar">
        <div className="toolbar-divider" />
        <span className="toolbar-section-label">Add</span>

        {Object.entries(NODE_DATA).map(([type, meta]) => (
            <button
                key={type}
                className={`tool-btn tool-btn--${type}`}
                onClick={() => onAdd(type)}
                title={`Add ${meta.label}`}
            >
                <span className="tool-btn__icon">
                    <img src={meta.icon} alt={meta.label} width={20} height={20} />
                </span>
                <span className="tool-btn__label">{meta.label}</span>
            </button>
        ))}
    </div>
);

export default Toolbar;
