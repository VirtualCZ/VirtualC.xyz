import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, checked, onChange, id }) => {
  return (
    <div className="switch-container">
      <label htmlFor={id} className="switch-label">
        {label}
      </label>
      <label className="switch">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
