import closeIon from "../../assets/x.png";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <div className={`modal ${isOpen ? "modal__open" : ""}`}>
      <div className="modal__content modal__content_type">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeIon} alt="close" className="close" />
        </button>

        <form className="modal__form" onSubmit={handleSubmit}>
          <p className="delete__text"> Are you sure you want to delete</p>
          <div className="modal__button">
            <button type="button" className="delete__confirm-btn">
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
        </form>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
