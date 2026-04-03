import { useState } from "react";

const TransportModal = ({ edge, onSave, onClose }) => {
    const [transport, setTransport] = useState(edge.data?.transport || '');

    const handleSave = () => {
        onSave(edge.id, transport.trim());
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') { e.preventDefault(); handleSave(); }
        if (e.key === 'Escape') onClose();
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <div className="modal__title">Transport Label</div>
                    <div className="modal__subtitle">Add how you get between these stops</div>
                </div>

                <div className="modal__field">
                    <label className="modal__label">Transport</label>
                    <input
                        className="modal__input"
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                        onKeyDown={handleKey}
                        autoFocus
                        placeholder="e.g. Flight · 8:00 AM, Taxi · 15 min, Walk..."
                    />
                </div>

                <div className="modal__actions">
                    <button className="modal__btn modal__btn--cancel" onClick={onClose}>Cancel</button>
                    <button className="modal__btn modal__btn--save" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default TransportModal;