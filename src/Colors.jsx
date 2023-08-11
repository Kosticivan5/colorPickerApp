import { useState } from "react";
import Color from "./Color";
import { nanoid } from "nanoid";

const Colors = ({ values, toast }) => {
  const [intValue, setIntValue] = useState(10);
  const [color, setColor] = useState("#0f366c");
  const [colors, setColors] = useState(values.all(intValue));
  const [rangeValue, setRangeValue] = useState(intValue);

  const handleColor = (e) => {
    // e.preventDefault();
    try {
      let val = e.target.value;
      setColor(val);
      values.setColor(val);
      setColors(values.all(rangeValue));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRange = (e) => {
    let val = parseInt(e.target.value, 10);
    setRangeValue(val);
    setColors(values.all(val));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color === "") {
      toast.error(`Please enter some value`);
    }
    handleColor(color);
    handleRange(rangeValue);
  };

  return (
    <>
      <form className="color-form" onSubmit={handleSubmit}>
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
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button
            className="btn"
            type="submit"
            style={{ backgroundColor: `${color} ` }}
          >
            submit color
          </button>
        </div>
      </form>
      <main className="colors">
        {colors.map((color, index) => {
          return (
            <Color
              key={nanoid()}
              color={color}
              index={index}
              length={colors.length}
              toast={toast}
            />
          );
        })}
      </main>
    </>
  );
};
export default Colors;
