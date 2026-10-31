import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, handleSubmit, onClose }) => {
  return (
    <ModalWithForm
      title="New Garment"
      name="new-card"
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="name" className="modal__label modal__label-name">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
        />
      </label>

      <label htmlFor="imageUrl" className="modal__label modal__label-image">
        Image{""}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image url"
        />
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weather"
            value="hot"
            className="modal__radio-input"
          />{" "}
          Hot{" "}
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            value="warm"
            className="modal__radio-input"
          />{" "}
          Warm{" "}
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weather"
            value="cold"
            className="modal__radio-input"
          />{" "}
          Cold{" "}
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
