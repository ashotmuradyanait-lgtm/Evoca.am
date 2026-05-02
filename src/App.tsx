import React from 'react';
import { Routes, Route } from "react-router-dom"; // Ավելացրու սա
import Header from "./components/Header";
import Footer from "./components/Footer";
import Varker from "./components/Varker";
import Grav from "./components/Grav";
import Leasing from "./components/Leasing";
import Online from "./components/Online";
import Angrav from "./components/Angrav";
import Sqor from "./components/Sqor";
import Evocatouch from "./components/Evocatouch";
import Erku from "./components/Erku";
import Nyut from "./components/Nyut";
import Hipotek from "./components/Hipotek";
import Evocaonline from "./components/Evocaonline";
import Avto from "./components/Avto";
import Nverqart from "./components/Nverqart";
import Biznes from "./components/Biznes";
import Search from "./components/Search";
import Qarter from "./components/Qarter";
import Tvayin from "./components/Tvayin";
import Premium from "./components/Premium";
import Visa from "./components/Visa";
import Arca from "./components/Arca";
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

      <main className="flex-grow">
        <Routes>
         
          <Route path="/" element={
            <>
             <Menu />
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

          
          <Route path="/varker" element={<Varker />} />
          <Route path="/grav" element={<Grav />} />
          <Route path="/angrav" element={<Angrav />} />
          <Route path="/hipotek" element={<Hipotek />} />
          <Route path="/avto" element={<Avto />} />
          <Route path="/leasing" element={<Leasing />} />
          <Route path="/online" element={<Online />} />
          <Route path="/sqor" element={<Sqor />} />
          <Route path="/nyut" element={<Nyut />} />
          <Route path="/evocaonline" element={<Evocaonline />} />
          <Route path="/evocatouch" element={<Evocatouch />} />
          <Route path="/biznes" element={<Biznes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/qarter" element={<Qarter />} />
          <Route path="/erku" element={<Erku />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/nverqart" element={<Nverqart />} />
          <Route path="/tvayin" element={<Tvayin />} />
          <Route path="/arca" element={<Arca />} />
          <Route path="/visa" element={<Visa />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;