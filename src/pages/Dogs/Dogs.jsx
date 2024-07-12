import { Card, Search, Section } from "../../components";
import "./Dogs.css";
import imageSrc from "../../assets/images/imageSrc.json";
const Dogs = () => {
  return (
    <Section sectionTitle="DogsForEver" className="card-section">
      <Search />
      <Section>
        <Card
          title="Lola"
          description="Jack Russel"
          imgSrc={imageSrc.images[0]}
          distance="32km"
        />
        <Card
          title="Buddy"
          description="Golden Retriever"
          imgSrc={imageSrc.images[1]}
          distance="12km"
        />
        <Card
          title="Charlie"
          description="Beagle"
          imgSrc={imageSrc.images[2]}
          distance="2km"
        />
        <Card
          title="Daisy"
          description="Poodle"
          imgSrc={imageSrc.images[3]}
          distance="20km"
        />
      </Section>
    </Section>
  );
};

export default Dogs;
