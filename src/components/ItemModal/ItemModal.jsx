import "./ItemModle.css";

function ItemModle({ activeModal, onClose, card }) {
  return (
    <div className="modal">
      <div className="modal__content modal__content__type__image">
        <button onClick={onClose} type="button" className="modal__close">
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default ItemModle;
