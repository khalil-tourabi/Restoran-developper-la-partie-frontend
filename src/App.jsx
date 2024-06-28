import { useState } from "react";
import Accueil from "./components/Accueil/Accueil";
import AjouterArticle from "./components/Ajouter Article/AJouterArticle";
import AfficherArticle from "./components/Afficher Article/AfficherArticle";
import APropos from "./components/A Propos/APropos";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return <Accueil />;
}

export default App;
