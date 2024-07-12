import "./Home.css";
import { Section, Article, Title, Paragraph } from "@/components";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";

function Home() {
  const { darkMode, switchDarkMode } = useContext(ThemeContext);
  return (
    <>
      <Section SectionTitle="Mon Application React">
        <Article>
          <Title title="Mon Premier Article" levelTitle={3}></Title>
          <Paragraph>
            Voici le premier article sur le projet fil rouge de la formation
            {'"Approfondir ses connaissances en React"'}
            {` "Approfondir ses connaissances en React"`}
          </Paragraph>

          <button
            onClick={() => {
              switchDarkMode();
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </Article>
      </Section>
    </>
  );
}

export default Home;
