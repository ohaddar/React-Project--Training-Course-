import "./Root.css";
import MainNav from "@/navigation/MainNav";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useContext } from "react";
import Footer from "../Footer/Footer";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
function Root() {
  const { darkMode } = useContext(ThemeContext);
  const mainContentClassNames = darkMode ? " darkMode" : "main-content";
  return (
    <main className={mainContentClassNames}>
      <Header />
      <MainNav />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Root;
