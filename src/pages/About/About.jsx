import "./About.css";
import { Section, Article, Title, Paragraph } from "@/components";
function About() {
  return (
    <Section sectionTitle="À propos de l'application">
      <Article>
        <Title title="Développeur de l'application" levelTitle={3}></Title>
        <Paragraph>Nom de développeur : Dufrène Valérian</Paragraph>
        <Paragraph>
          Gérant de {"l'entreprise"} Webdevoo depuis Mars 2019 et de{" "}
          {"l'organisme"} de webdevoo formation depuis juin 2023
        </Paragraph>
        <Paragraph>
          Spécialités (liste non exhaustive) : PHP, HTML, CSS, JavaScripte,
          React, Angular, React Native, SolidJS, Remix, Lua, Python, Prestashop,
          Wordpress....
        </Paragraph>
      </Article>
      <Article>
        <Title title="Technologies" levelTitle={3}></Title>
        <Paragraph>Nom de{" l'application"} :fill rouge</Paragraph>
        <Paragraph>
          Cette application a été développée en React (version 18.2).
        </Paragraph>
        <Paragraph>
          Le routage est géré par la librairie React Router.
        </Paragraph>
        <Paragraph>
          Aucune librairie UI {"n'a"} été implémentée sur {"l'application"}.
        </Paragraph>
      </Article>
    </Section>
  );
}

export default About;
