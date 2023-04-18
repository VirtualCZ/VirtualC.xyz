const CheckBox = () => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id="checkbox1" />
      <label htmlFor="checkbox1" className="checkbox">
        <span></span>
      </label>
      <label htmlFor="checkbox1">Checkbox Label</label>
    </div>
  );
};

export default CheckBox;
