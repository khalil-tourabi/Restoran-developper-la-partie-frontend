// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import AjouterArticle from "./components/Ajouter Article/AJouterArticle";
import APropos from "./components/A Propos/APropos";
import Articles from "./components/Articles/Articles";
import Article from "./components/Afficher Article/Article";
import UpdateArticle from "./components/Update Article/UpdateArticle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ajouter-article" element={<AjouterArticle />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/updatepost/:id" element={<UpdateArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
