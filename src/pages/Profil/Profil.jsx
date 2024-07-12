import { Article, Paragraph, Title } from "../../components";
import "./Profil.css";
import imageContact from "../../assets/images/imageContact.json";
import { useEffect, useState } from "react";
function Profil() {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [profilImg, setProfileImg] = useState(null);
  const [citation, setCitation] = useState(null);
  const [citationList, setCitationList] = useState(null);

  const fetchProfileImg = async () => {
    setLoading(true);
    setError(null);
    try {
      const urls = [
        "https://placebear.com/200/300",
        "https://placebear.com/g/200/300",
      ];
      const randomUrl = urls[Math.floor(Math.random() * urls.length)];
      setProfileImg(randomUrl);
    } catch (error) {
      setError("Erreur lors de la récupération de l'image");
    } finally {
      setLoading(false);
    }
  };
  const fetchCitation = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("la reponse de api failed");
      }
      const data = await response.json();
      setCitationList(data);

      setCitation(data);
    } catch (error) {
      setError("Erreur lors de la réxupération de l'image");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!citationList) {
      fetchCitation();
    }
    fetchProfileImg();
  }, [citationList]);

  return (
    <div className="main-div">
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

      <Article className="card-article">
        {profilImg && (
          <Article
            className="img-profil-article"
            style={{ backgroundColor: "#b00756e3" }}
          >
            <img src={profilImg} className="profil-img"></img>
          </Article>
        )}

        <Article className="title-article" style={{ color: "black" }}>
          <Title
            title="Johnny Rogers"
            levelTitle={2}
            style={{ color: "black" }}
          />
          <Title
            title="@huusdbn-.skds"
            levelTitle={6}
            style={{ color: "black" }}
          />
        </Article>
        <Article className="contact-img-article">
          <img src={imageContact.Contact[0]} className="social-img"></img>
          <img src={imageContact.Contact[1]} className="social-img"></img>
          <img src={imageContact.Contact[2]} className="social-img"></img>
          <img src={imageContact.Contact[3]} className="social-img"></img>
        </Article>
        {citation && (
          <>
            <Article className="paragraph-article">
              <Paragraph>{citation.content}</Paragraph>
            </Article>

            <Article className="btn-article">
              <button onClick={() => fetchProfileImg()}>Bonjour</button>
              <button onClick={() => fetchCitation()}>Génération </button>
            </Article>
          </>
        )}
      </Article>
    </div>
  );
}

export default Profil;
