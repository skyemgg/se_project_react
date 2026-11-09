import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  weatherData,
  handleAddClick,
}) {
  const visibleItems = weatherData
    ? clothingItems.filter((item) => item.weather === weatherData.type)
    : clothingItems;

  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-sectiion__title">Your items</p>

        <button
          handleAddClick={handleAddClick}
          type="button"
          className="clothes-section__add-btn"
        >
          + Add new
        </button>
      </div>

      <ul className="clothes-section__list">
        {visibleItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}
