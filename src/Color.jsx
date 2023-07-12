const Color = ({ color, index, length, toast }) => {
  const { hex, weight } = color;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success(`#${hex} Copied to clipboard`);
    } catch (error) {
      toast.error("Failed to copy the color to clipboard");
    }
  };

  return (
    <article
      style={{
        background: `#${hex}`,
        border: weight === 0 ? "2px solid #fff" : "none",
        color: index < length / 2 ? "#000" : "#fff",
      }}
      className="color"
      onClick={copyToClipboard}
    >
      <p>{weight}%</p>
      <h4>#{hex}</h4>
    </article>
  );
};
export default Color;
