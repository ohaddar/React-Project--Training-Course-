import "./MainNav.css";
import { Link } from "react-router-dom";
function MainNav() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <p>Accueil</p>
      </Link>
      <Link to="/a-propos">
        <p>À propos</p>
      </Link>{" "}
      <Link to="/Futurama">
        <p>Futurama</p>
      </Link>
      <Link to="/Dogs">
        <p>Dogs</p>
      </Link>{" "}
      <Link to="/Profil">
        <p>Profil</p>
      </Link>{" "}
      <Link to="/ProductCard">
        <p>Product-Card</p>
      </Link>
    </nav>
  );
}

export default MainNav;
