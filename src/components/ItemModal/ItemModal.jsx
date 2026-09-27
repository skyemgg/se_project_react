import "./ItemModle.css";

function ItemModle({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal__open" : ""}`}>
      <div className="modal__content modal__content__type__image">
        <button onClick={onClose} type="button" className="modal__close">
          CLOSE
        </button>
        <img src={card.link} className="modal_image">
          <div className="modal__footer">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
        </img>
      </div>
    </div>
  );
}

export default ItemModle;
