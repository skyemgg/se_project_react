function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type">
        <button type="button" className="modal__close" onClick={onClose} />
        <p className="delete__text"> Are you sure you want to delete</p>
        <div className="modal__button">
          <button
            type="button"
            className="delete__confirm-btn"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            className="delete__cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
