import React from 'react';
import { Routes, Route } from "react-router-dom"; // Ավելացրու սա
import Header from "./components/Header";
import Footer from "./components/Footer";
import Varker from "./components/Varker";
import Grav from "./components/Grav";
import Angrav from "./components/Angrav";
import Menu from "./pages/Menu";
import Anhat from "./pages/Anhat";
import HeroSlider from "./pages/HeroSlider";
import EvocaBackground from './pages/EvocaBackground';
import Card from "./pages/Card";
import Calculator from "./pages/Calculator";
import Video from "./pages/Video";
import Brends from "./pages/Brends";
import News from "./pages/News";
import Money from "./pages/Money";
import Reviews from "./pages/Reviews";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Menu />

      <main className="flex-grow">
        <Routes>
         
          <Route path="/" element={
            <>
              <HeroSlider />
              <Anhat />
              <EvocaBackground />
              <Card />
              <Calculator />
              <Video />
              <Brends />
              <News />
              <Money />
              <Reviews />
            </>
          } />

          {/* Վարկերի առանձին էջը */}
          <Route path="/varker" element={<Varker />} />
          <Route path="/grav" element={<Grav />} />
          <Route path="/angrav" element={<Angrav />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;