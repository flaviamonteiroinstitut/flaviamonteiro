//Packages import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages Import
import Home from "./Pages/Home/Home";
import APropos from "./Pages/APropos/APropos";
import LeCabinet from "./Pages/LeCabinet/LeCabinet";
import Photos from "./Pages/Photos/Photos";
import Prestations from "./Pages/Prestations/Prestations";
import Evenements from "./Pages/Evenements/Evenements";

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
        <Route path="/lecabinet" element={<LeCabinet />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/evenements" element={<Evenements />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
