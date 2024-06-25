import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);

  const increaseTemperature = () => {
    setTemperatureValue(prevTemp => prevTemp + 1);
  };

  const decreaseTemperature = () => {
    setTemperatureValue(prevTemp => prevTemp - 1);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
