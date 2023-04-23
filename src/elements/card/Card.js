import "./Card.css";

const Card = ({ width = 100, children }, props) => {
  return <div className={`w-${width} card`}>{children}</div>;
};
export default Card;
