//Packages import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages Import
import Home from "./Pages/Home/Home";
import APropos from "./Pages/APropos/APropos";
import Monceau from "./Pages/LeCabinet/LeCabinet";
import Douai from "./Pages/LeCabinet1/LeCabinet1";
import Photos from "./Pages/Photos/Photos";
import Prestations from "./Pages/Prestations/Prestations";
import Agenda from "./Pages/Evenements/Agenda";

//Components import
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/monceau" element={<Monceau />} />
        <Route path="/douai" element={<Douai />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
