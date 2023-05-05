import "./TextInput.css";

const TextInput = ({
  label = "unnamed",
  unit = "no unit",
  placeholder,
  onChange = () => {
    console.log(
      "Please include an onChange action.",
      "label: " + label,
      "unit: " + unit
    );
  },
}) => {
  return (
    <div className="input-container">
      <div className="input-row">
        <label htmlFor="text-input" className="input-label">
          {label}
        </label>
      </div>
      <div className="input-row">
        <input
          type="text"
          id="text-input"
          name="text-input"
          className="text-input"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
