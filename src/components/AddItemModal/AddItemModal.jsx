import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const defaultValues = { name: "", imageUrl: "", weather: "" };

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const { values, handleChange, resetForm } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, resetForm);
  }

  return (
    <ModalWithForm
      title="New Garment"
      name="new-card"
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="name" className="modal__label modal__label-name">
        Name
        <input
          type="text"
          name="name"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="imageUrl" className="modal__label modal__label-image">
        Image
        <input
          type="text"
          name="imageUrl"
          className="modal__input"
          id="imageUrl"
          placeholder="Image url"
          required
          value={values.imageUrl}
          onChange={handleChange}
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
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          Hot
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            value="warm"
            className="modal__radio-input"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weather"
            value="cold"
            className="modal__radio-input"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
