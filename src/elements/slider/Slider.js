import "./Slider.css";

const Slider = ({
  value,
  onChange,
  label = "Slider",
  unit = `${value}%`,
  step = 1,
  min = 0,
  max = 100,
}) => {
  const setSliderBg = () => {
    const percent = ((value - 0) / (100 - 0)) * 100;
    const color = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${percent}%, var(--text) ${percent}%, var(--text) 100%)`;
    return color;
  };

  return (
    <div className="custom-slider-container">
      <p className="custom-slider-label">{label}</p>
      <div className="custom-slider">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className="slider-range"
          step={step}
          onChange={onChange}
          style={{ background: setSliderBg() }}
        />
        <p className="slider-unit">{unit}</p>
      </div>
    </div>
  );
};

export default Slider;
