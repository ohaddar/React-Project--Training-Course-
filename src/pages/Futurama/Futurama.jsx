import { useEffect, useState } from "react";
import "./Futurama.css";
import { Article, Title, Paragraph } from "@/components";
import * as LocalDatas from "@/utils/LocalDatas/LocalDatas";
function Futurama() {
  const [characterList, setCharacterList] = useState(null);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const returnRandomCharacter = (actualArray) => {
    return actualArray[Math.floor(Math.random() * actualArray.length)];
  };
  const fetchCharacter = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.sampleapis.com/futurama/characters"
      );
      if (!response.ok) {
        throw new Error("la réponse de l'API n'est pas OK.");
      }
      const data = await response.json();
      setCharacterList(data);
      LocalDatas.setData("futuramaCharactersList", JSON.stringify(data));

      const randomCharacter = returnRandomCharacter(data);
      setCharacter(randomCharacter);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors de la réxupération du personnage");
      setLoading(false);
    }
  };
  useEffect(() => {
    const futuramaLocalDatas = LocalDatas.getData("futuramaCharactersList");
    if (futuramaLocalDatas) {
      setCharacterList(JSON.parse(futuramaLocalDatas));
    }
    if (!characterList) {
      fetchCharacter();
    }
  }, [characterList]);

  return (
    <>
      {loading && (
        <Article>
          <Title title="Chargement des données" levelTitle={2} />
          <Paragraph>Les données sont en cours de récupération...</Paragraph>
        </Article>
      )}
      {error && (
        <Article>
          <Title title="Erreur" levelTitle={2} />
          <Paragraph>
            Une erreur a été rencontrée lors de la récupération des données.
          </Paragraph>
          <Paragraph>Détails : {error} </Paragraph>
        </Article>
      )}
      {character && (
        <Article>
          <button
            onClick={() =>
              !characterList
                ? fetchCharacter()
                : setCharacter(returnRandomCharacter(characterList))
            }
          >
            Nouveau Personnage
          </button>
          <Title
            title={`${character.name.first}${"  "}${
              character.name.middle
            }${"  "}${character.name.last}`}
            levelTitle={2}
          />
          <img src={character.images.main} alt={character.name.first} />
          <Paragraph>
            <strong>Âge</strong>:
            {character.age.toLowerCase() !== "unknown"
              ? character.age
              : "Inconnu"}
          </Paragraph>
          <Paragraph>
            <strong>Genre</strong> : {character.gender}
          </Paragraph>{" "}
          <Paragraph>
            <strong>Espèce</strong> : {character.species}
          </Paragraph>{" "}
          {character.occupation && (
            <Paragraph>
              <strong>Occupation</strong> : {character.occupation}
            </Paragraph>
          )}
          {character.homePlanet && (
            <Paragraph>
              <strong>Planète</strong> : {character.homePlanet}
            </Paragraph>
          )}
          <Paragraph>
            <strong>Expression</strong> :{" "}
            {
              character.sayings[
                Math.floor(Math.random() * character.sayings.length)
              ]
            }
          </Paragraph>
          <ul>
            {character.sayings.map((saying, index) => (
              <li key={index}>{saying}</li>
            ))}
          </ul>
        </Article>
      )}
    </>
  );
}

export default Futurama;
