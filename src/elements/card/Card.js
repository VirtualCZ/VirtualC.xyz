import "./Card.css";

const Card = ({ width = 100 }, props) => {
  return <div className={`w-${width} card`}>{props.children}</div>;
};
export default Card;
