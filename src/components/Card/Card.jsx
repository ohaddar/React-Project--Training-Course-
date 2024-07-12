import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import "./Card.css";

function Card({ title, description, imgSrc, distance }) {
  return (
    <div className="card">
      <img
        className="card-image"
        style={{ width: "7rem" }}
        src={imgSrc}
        alt="dog 1"
      />
      <Title title={title} levelTitle={3}></Title>

      <Title levelTitle={2}></Title>
      <Paragraph>{description}</Paragraph>
      <Paragraph>{distance}</Paragraph>
    </div>
  );
}

export default Card;
