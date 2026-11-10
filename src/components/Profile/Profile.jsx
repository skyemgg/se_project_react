import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  handleCardClick,
  weatherData,
  handleAddClick,
}) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        onCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
        weatherData={weatherData}
      />
    </section>
  );
}
