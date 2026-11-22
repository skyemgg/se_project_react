import { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import { getItems, addItem, removeItem } from "../../utils/api.js";
import "./App.css";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.jsx";

function App() {
  const [clothingItems, setClothingItems] = useState([]);

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const closeModal = useCallback(() => {
    setActiveModal("");
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const onAddItem = (inputValues, resetForm) => {
    return addItem(inputValues)
      .then((data) => {
        setClothingItems((prevItems) => [data, ...prevItems]);
        resetForm();
        closeModal();
      })
      .catch(console.error);
  };

  const handleOpenDeleteModal = (card) => {
    if (card) {
      setSelectedCard(card);
    }
    setActiveModal("delete-confirmation");
  };

  const handleRemoveItem = () => {
    if (!selectedCard?._id) return;

    return removeItem(selectedCard._id)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== selectedCard._id),
        );
        closeModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data);
      })

      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal, closeModal]);

  return (
    <currentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                  clothingItems={clothingItems}
                  handleOpenDeleteModal={handleOpenDeleteModal}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeModal}
          onAddItem={onAddItem}
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeModal}
          onDeleteClick={() => handleOpenDeleteModal(selectedCard)}
        />

        <DeleteConfirmationModal
          isOpen={activeModal === "delete-confirmation"}
          onClose={closeModal}
          onConfirm={handleRemoveItem}
        />
      </div>
    </currentTemperatureUnitContext.Provider>
  );
}

export default App;
