const Slider = ({ value, onChange }) => {
  const setSliderBg = () => {
    const percent = ((value - 0) / (100 - 0)) * 100;
    const color = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${percent}%, var(--text) ${percent}%, var(--text) 100%)`;
    return color;
  };

  return (
    <div className="custom-slider">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider-range"
        onChange={onChange}
        style={{ background: setSliderBg() }}
      />
    </div>
  );
};

export default Slider;
