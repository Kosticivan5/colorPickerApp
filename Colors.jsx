import { useState } from "react";
import Color from "./Color";
import { INITIAL_VALUE } from "./consts";

const Colors = ({ toast, vls }) => {
  const [colors, setColors] = useState(vls.all(INITIAL_VALUE));
  const [color, setColor] = useState("#0f366c");
  const [rangeValue, setRangeValue] = useState(INITIAL_VALUE);

  const handleRange = (evt) => {
    evt.preventDefault();
    const val = parseInt(evt.target.value, 10);
    setRangeValue(val);
    setColors(vls.all(val));
  };

  const handleColor = (evt) => {
    evt.preventDefault();
    const val = evt.target.value;
    setColor(val);
    vls.setColor(val);
    setColors(vls.all(rangeValue));
  };

  return (
    <>
      <form className="color-form">
        <label htmlFor="color-picker">Pick a color with color picker</label>
        <input type="color" className="color-picker" onChange={handleColor} />
        <label htmlFor="range-input">Select your preferred range</label>
        <input
          className="range-input"
          id="range-input"
          type="range"
          value={rangeValue}
          min="2"
          max="20"
          step="2"
          onChange={handleRange}
        />
        <label htmlFor="color-hex">Enter your favorite color</label>
        <div>
          <input
            type="text"
            placeholder="#0f366c"
            id="color-hex"
            className="color-hex"
            value={color}
            onChange={handleColor}
          />
        </div>
      </form>
      <main className="colors">
        {colors.map((color, index) => {
          return <Color key={color.hex} color={color} index={index} length={colors.length} toast={toast} />;
        })}
      </main>
    </>
  );
};
export default Colors;
