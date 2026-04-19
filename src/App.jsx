import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import APropos from "./Pages/APropos/APropos";
import Monceau from "./Pages/LeCabinet/LeCabinet";
import Photos from "./Pages/Photos/Photos";
import Prestations from "./Pages/Prestations/Prestations";
import Agenda from "./Pages/Evenements/Agenda";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/monceau" element={<Monceau />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
