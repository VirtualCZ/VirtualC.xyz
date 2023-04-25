import "./Card.css";

const Card = ({ width = 100, children, className }) => {
  return (
    <div className={`w-${width} card ${className ? className : ""}`}>
      {children}
    </div>
  );
};
export default Card;
