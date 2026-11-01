import "./ModalWithForm.css";
import closeIcon from "../../assets/x.png";

const ModalWithForm = ({
  children,
  buttonText = "Save",
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
}) => (
  <div className={`modal modal_type_${name} ${isOpen ? "modal__open" : ""}`}>
    <div className="modal__content">
      <h2 className="modal__title">{title}</h2>

      <button onClick={onClose} type="button" className="modal__close">
        <img src={closeIcon} alt="closeicon" className="close" />
      </button>

      <form onSubmit={onSubmit} className="modal__form" name={name}>
        <div>{children}</div>

        <button className="modal__submit" type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  </div>
);

export default ModalWithForm;
