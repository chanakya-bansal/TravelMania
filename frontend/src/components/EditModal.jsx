import { useState } from "react";
import { NODE_DATA } from "../pages/Planner";


const EditModal = ({ node, onSave, onDelete, onClose }) => {
    const [label, setLabel] = useState(node.data.label);
    const [note, setNote] = useState(node.data.note || '');
    const meta = NODE_DATA[node.data.type];

    const handleSave = () => {
        if (label.trim()) onSave(node.id, label.trim(), note.trim());
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSave(); }
        if (e.key === 'Escape') onClose();
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <span className="modal__icon">
                        <img src={meta.icon} alt={meta.label} width={20} height={20} />
                    </span>
                    <div>
                        <div className="modal__title">Edit {meta.label}</div>
                        <div className="modal__subtitle">Click any node to edit</div>
                    </div>
                </div>

                <div className="modal__field">
                    <label className="modal__label">Name</label>
                    <input
                        className="modal__input"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        onKeyDown={handleKey}
                        autoFocus
                        placeholder={`${meta.label} name...`}
                    />
                </div>

                <div className="modal__field">
                    <label className="modal__label">Notes</label>
                    <textarea
                        className="modal__textarea"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        onKeyDown={handleKey}
                        placeholder="Time, address, booking ref..."
                    />
                </div>

                <div className="modal__actions">
                    <button className="modal__btn modal__btn--delete" onClick={() => onDelete(node.id)} title="Delete node">🗑</button>
                    <button className="modal__btn modal__btn--cancel" onClick={onClose}>Cancel</button>
                    <button className="modal__btn modal__btn--save" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;