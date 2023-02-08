import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 35) {
      setTemperatureColor("very-hot");
    } else if (newTemperature >= 25 && newTemperature < 35) {
      setTemperatureColor("hot");
    } else if (newTemperature >= 15 && newTemperature < 25) {
      setTemperatureColor("mild");
    } else if (newTemperature >= 0 && newTemperature < 15) {
      setTemperatureColor("cold");
    } else {
      setTemperatureColor("very-cold");
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature >= 35) {
      setTemperatureColor("very-hot");
    } else if (newTemperature >= 25 && newTemperature < 35) {
      setTemperatureColor("hot");
    } else if (newTemperature >= 15 && newTemperature < 25) {
      setTemperatureColor("mild");
    } else if (newTemperature >= 0 && newTemperature < 15) {
      setTemperatureColor("cold");
    } else {
      setTemperatureColor("very-cold");
    }
    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};

export default App;
