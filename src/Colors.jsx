import { useState } from "react";
import Color from "./Color";
import { nanoid } from "nanoid";

const Colors = ({ colors, handleColor, toast, handleRange }) => {
  const [color, setColor] = useState("#0f366c");
  const [rangeValue, setRangeValue] = useState(10);

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
        <input
          type="color"
          className="color-picker"
          onChange={(e) => {
            handleColor(e.target.value);
            setColor(e.target.value);
          }}
        />
        <input
          className="range-input"
          type="range"
          value={rangeValue}
          min="2"
          max="20"
          step="2"
          onChange={(e) => {
            handleRange(parseInt(e.target.value));
            setRangeValue(parseInt(e.target.value));
            handleColor(color);
          }}
        />
        <div>
          <input
            type="text"
            placeholder="#0f366c"
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
