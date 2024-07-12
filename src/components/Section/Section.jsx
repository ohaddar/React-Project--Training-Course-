import Title from "../Title/Title";
import "./Section.css";
function Section({ sectionTitle, children }) {
  return (
    <section>
      {sectionTitle !== "" && (
        <Title title={sectionTitle} levelTitle={2}></Title>
      )}
      {children}
    </section>
  );
}

export default Section;
