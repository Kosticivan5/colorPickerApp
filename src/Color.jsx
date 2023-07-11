const Color = ({ color, index, length }) => {
  const { hex, weight } = color;

  return (
    <article
      style={{
        background: `#${hex}`,
        border: weight === 0 ? "2px solid #fff" : "none",
        color: index < length / 2 ? "#000" : "#fff",
      }}
      className="color"
    >
      <p>{weight}%</p>
      <h4>#{hex}</h4>
    </article>
  );
};
export default Color;
