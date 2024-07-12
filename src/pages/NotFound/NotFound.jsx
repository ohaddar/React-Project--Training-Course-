import "./NotFound.css";
import { Link, useRouteError } from "react-router-dom";
import { Title, Paragraph } from "@/components";
function NotFound() {
  const error = useRouteError();
  return (
    <div>
      <Title title="Erreur 404" levelTitle={2}></Title>
      <Paragraph>La ressource demandée est introuvable...</Paragraph>
      {error?.statusText ||
        (error?.message && (
          <Paragraph>
            <small>{`Erreur : ${error?.statusText || error?.message}`}</small>
          </Paragraph>
        ))}
      <Link to="/">Retourner vers la page {`d'acceuill`}</Link>
    </div>
  );
}
export default NotFound;
