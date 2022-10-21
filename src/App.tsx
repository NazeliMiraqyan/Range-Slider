import React from "react";
import { Slider } from "./components";
import Theme from "./components/Slider/theme";

const initialPrice = 1;
const max = 5;
const min = 1;
const recommendedLimit = 0.14;

const App: React.FC = () => {
  const handleSliderChange = (value: number) => {
    console.log(value, "priceValue in APP");
  };

  return (
    <div className="App">
      <Theme>
        <Slider
          onChange={handleSliderChange}
          initialPrice={initialPrice}
          max={max}
          min={min}
          recommendedLimit={recommendedLimit}
        />
      </Theme>
    </div>
  );
};

export default App;
