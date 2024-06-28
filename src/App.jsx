// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import AjouterArticle from "./components/Ajouter Article/AJouterArticle";
import AfficherArticle from "./components/Afficher Article/AfficherArticle";
import APropos from "./components/A Propos/APropos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ajouter-article" element={<AjouterArticle />} />
        <Route path="/afficher-article" element={<AfficherArticle />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
    </Router>
  );
}

export default App;
