import { useState, useEffect } from "react";
import { defaultClothingItems } from "../../utils/constants";

import "./App.css";

import Header from "../Header/Header";

import Main from "../Main/Main";

import Footer from "../Footer/Footer";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import ItemModle from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });

  const [activeModal, setActiveModal] = useState("");

  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />

        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          setClothingItems={setClothingItems}
        />
      </div>

      <Footer></Footer>

      <ModalWithForm
        buttonText="Add Garment"
        title="New Garment"
        activeModal={activeModal}
        isOpen={activeModal === "add-garment"}
        name="new-card"
        onClose={closeModal}
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

          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio-input"
            />{" "}
            Warm{" "}
          </label>

          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
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

      <ItemModle
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
