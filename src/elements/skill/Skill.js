import Card from "../card/Card";
import "./Skill.css";

const colors = ["#FF0000", "#ffa500", "#ffff00", "#90EE90", "#008000"];

const Skill = ({ rating, skillName }) => {
  const ratingText = [
    "Novice",
    "Developing",
    "Proficient",
    "Skilled",
    "Advanced",
  ];

  const spans = [];
  for (let i = 1; i <= rating; i++) {
    const spanStyle = {
      backgroundColor: colors[rating - 1],
    };
    spans.push(<span style={spanStyle} />);
  }

  const remainingSpans = 5 - rating;
  const remainingSpanStyle = { backgroundColor: "transparent" };
  for (let i = 0; i < remainingSpans; i++) {
    spans.push(<span style={remainingSpanStyle} />);
  }

  return (
    <Card className="card-skill">
      <h2>{skillName}</h2>
      <div>
        <h3>{ratingText[rating - 1]}</h3>
        <div className="card-skill_rating">{spans}</div>
      </div>
    </Card>
  );
};
export default Skill;
