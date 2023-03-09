import "./App.css";
import { Route, Routes } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Favoriler from "./components/Favoriler";
import Sepet from "./components/Sepet";
import Fragrances from "./components/Fragrances";
import Groceries from "./components/Groceries";
import HomeDecoration from "./components/HomeDecoration";
import Laptops from "./components/Laptops";
import Skincare from "./components/Skincare";
import SmartPhones from "./components/SmartPhones";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/favoriler" element={<Favoriler />} />
        <Route path="/sepet" element={<Sepet />} />
        <Route path="/farfümler" element={<Fragrances />} />
        <Route path="/yiyecekler" element={<Groceries />} />
        <Route path="/evDekorasyonu" element={<HomeDecoration />} />
        <Route path="/laptoplar" element={<Laptops />} />
        <Route path="/ciltBakımÜrünleri" element={<Skincare />} />
        <Route path="/akıllıTelefonlar" element={<SmartPhones />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
