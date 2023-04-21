import "./RadioButton.css";

const RadioButton = () => {
  return (
    <>
      <div className="radio-container">
        <input type="radio" id="radio1" name="radio-group" />
        <label htmlFor="radio1" className="radio">
          <span></span>
        </label>
        <label htmlFor="radio1">Radio Label 1</label>
      </div>

      <div className="radio-container">
        <input type="radio" id="radio2" name="radio-group" />
        <label htmlFor="radio2" className="radio">
          <span></span>
        </label>
        <label htmlFor="radio2">Radio Label 2</label>
      </div>

      <div className="radio-container">
        <input type="radio" id="radio3" name="radio-group" />
        <label htmlFor="radio3" className="radio">
          <span></span>
        </label>
        <label htmlFor="radio3">Radio Label 3</label>
      </div>
    </>
  );
};

export default RadioButton;
