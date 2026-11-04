import "ClothesSection.css";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  weatherData,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p>text</p>
        <button>button</button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData?.type;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
      </ul>
    </div>
  );
}
