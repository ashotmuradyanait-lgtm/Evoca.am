import React, { useState } from 'react'; // Ավելացրինք useState
import { Routes, Route } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

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
import Trans from "./components/Trans";
import Nverqart from "./components/Nverqart";
import Biznes from "./components/Biznes";
import Search from "./components/Search";
import Qarter from "./components/Qarter";
import Tvayin from "./components/Tvayin";
import Premium from "./components/Premium";
import Visa from "./components/Visa";
import Arca from "./components/Arca";
import Pay from "./components/Pay";
import Spasarkum from "./components/Spasarkum";
import Social from "./components/Social";
import Bank from "./components/Bank";
import Avandner from "./components/Avandner";
import Salary from "./components/Salary";
import Karevor from "./components/Karevor";
import Ereqgic from "./components/Ereqgic";
import Providers from "./components/Providers";
import Metaxakan from "./components/Metaxakan";
import Hashivner from "./components/Hashivner";
import Rezident from "./components/Rezident";
import Infinite from "./components/Infinite";
import Messenger from "./components/Messenger";
import Poxancum from "./components/Poxancum";
import Vchar from "./components/Vchar";
import Visagold from "./components/Visagold";
import Gold from "./components/Gold";
import Arzetxter from "./components/Arzetxter"
import Partatoms from "./components/Partatoms";
import Hkd from "./components/Hkd";
import Repo from "./components/Repo";
import Invest from "./components/Invest";
import Norutyun from "./components/Norutyun";
import Bankayin from "./components/Bankayin";
import Product from "./components/Product";
import Nor from "./components/Nor";
import Erkrord from "./components/Erkrord";
import Avand from "./components/Avand";
import Kensakerp from "./components/Kensakerp";
import Mrcanak from "./components/Mrcanak";
import CSR from "./components/CSR";
import Ayl from "./components/Ayl";
import Two from "./components/Two";
import Blog from "./components/Blog";
import Berku from "./components/Berku";
import Bussines from "./components/Bussines";
import Bereq from "./components/Bereq";
import Bchors from "./components/Bchors";
import Bhing from "./components/Bhing";
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
  const { t } = useTranslation(); 
  

  const [selectedUser, setSelectedUser] = useState<any>(null);

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
          <Route path="/bank" element={<Bank />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/spasarkum" element={<Spasarkum />} />
          <Route path="/social" element={<Social />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/trans" element={<Trans />} />
          <Route path="/avandner" element={<Avandner />} />
          <Route path="/karevor" element={<Karevor />} />
          <Route path="/ereqgic" element={<Ereqgic />} />
          <Route path="/hashivner" element={<Hashivner />} />
          <Route path="/metaxakan" element={<Metaxakan />} />
          <Route path="/rezident" element={<Rezident />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/poxancum" element={<Poxancum />} />
          <Route path="/vchar" element={<Vchar />} />
          <Route path="/infinite" element={<Infinite />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/visagold" element={<Visagold />} />
          <Route path="/arzetxter" element={<Arzetxter />} />
          <Route path="/partatoms" element={<Partatoms />} />
          <Route path="/hkd" element={<Hkd />} />
          <Route path="/repo" element={<Repo />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/norutyun" element={<Norutyun />} />
          <Route path="/bankayin" element={<Bankayin />} />
          <Route path="/product" element={<Product />} />
          <Route path="/nor" element={<Nor />} />
          <Route path="/erkrord" element={<Erkrord/>} />
          <Route path="/avand" element={<Avand/>} />
          <Route path="/kensakerp" element={<Kensakerp/>} />
          <Route path="/mrcanak" element={<Mrcanak/>} />
          <Route path="/csr" element={<CSR/>} />
          <Route path="/ayl" element={<Ayl/>} />
          <Route path="/two" element={<Two/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/bussines" element={<Bussines/>} />
          <Route path="/berku" element={<Berku/>} />
          <Route path="/bereq" element={<Bereq/>} />
          <Route path="/bchors" element={<Bchors/>} />
          <Route path="/bhing" element={<Bhing/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;