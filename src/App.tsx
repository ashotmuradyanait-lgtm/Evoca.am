import React, { useState } from 'react'; 
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
import Bvec from "./components/Bvec";
import Kens from "./components/Kens";
import Nerdrum from "./components/Nerdrum";
import Erkus from "./components/Erkus";
import Lizing from "./components/Lizing";
import Hatuk from "./components/Hatuk";
import Dasakan from "./components/Dasakan";
import Hashiv from "./components/Hashiv";
import Ararka from "./components/Ararka";
import Shuka from "./components/Shuka";
import Depozit from "./components/Depozit";
import Brepo from "./components/Brepo";
import Inv from "./components/Inv";
import Mermasin from "./components/Mermasin";
import Karuyc from "./components/Karuyc";
import Bazin from "./components/Bazin";
import Xekavar from "./components/Xekavar";
import Gorc from "./components/Gorc"; 
import Mrcanakner from "./components/Mrcanakner";
import Karciq from "./components/Karciq";
import Corp from "./components/Corp";
import Sakagin from "./components/Sakagin";
import Irav from "./components/Irav";
import Mijnord from "./components/Mijnord";
import Avandik from "./components/Avandik";
import Arxiv from "./components/Arxiv";
import Hashvetu from "./components/Hashvetu";
import Finans from "./components/Finans";
import Nerdrox from "./components/Nerdrox";
import Kisamyak from "./components/Kisamyak";
import Tarekan from "./components/Tarekan";
import Hayt from "./components/Hayt";
import Kariera from "./components/Kariera";
import Aravel from "./components/Aravel";
import Hacax from "./components/Hacax";
import Yndunvel from "./components/Yndunvel";
import Practic from "./components/Practic";
import Usum from "./components/Usum";
import Bridge from "./components/Bridge";
import Mek from "./components/Mek";
import Myus from "./components/Myus";
import Ereq from "./components/Ereq";
import Chors from "./components/Chors";
import Hing from "./components/Hing";
import Vec from "./components/Vec";
import Yot from "./components/Yot";
import Ut from "./components/Ut";
import Iny from "./components/Iny";
import Tas from "./components/Tas";
import Tmek from "./components/Tmek";
import Terku from "./components/Terku";
import Hat from "./components/Hat";
import Part from "./components/Part";
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
          <Route path="/bvec" element={<Bvec/>} />
          <Route path="/kens" element={<Kens/>} />
          <Route path="/nerdrum" element={<Nerdrum/>} />
          <Route path="/erkus" element={<Erkus/>} />
          <Route path="/lizing" element={<Lizing/>} />
          <Route path="/hatuk" element={<Hatuk/>} />
          <Route path="/dasakan" element={<Dasakan/>} />
          <Route path="/hashiv" element={<Hashiv/>} />
          <Route path="/ararka" element={<Ararka/>} />
          <Route path="/shuka" element={<Shuka/>} />
          <Route path="/depozit" element={<Depozit/>} />
          <Route path="/brepo" element={<Brepo/>} />
          <Route path="/inv" element={<Inv/>} />
          <Route path="/mermasin" element={<Mermasin/>} />
          <Route path="/karuyc" element={<Karuyc/>} />
          <Route path="/bazin" element={<Bazin/>} />
          <Route path="/xekavar" element={<Xekavar/>} />
          <Route path="/gorc" element={<Gorc/>} />
          <Route path="/mrcanakner" element={<Mrcanakner/>} />
          <Route path="/karciq" element={<Karciq/>} />
          <Route path="/corp" element={<Corp/>} />
          <Route path="/sakagin" element={<Sakagin/>} />
          <Route path="/irav" element={<Irav/>} />
          <Route path="/mijnord" element={<Mijnord/>} />
          <Route path="/avandik" element={<Avandik/>} />
          <Route path="/arxiv" element={<Arxiv/>} />
          <Route path="/hashvetu" element={<Hashvetu/>} />
          <Route path="/finans" element={<Finans/>} />
          <Route path="/nerdrox" element={<Nerdrox/>} />
          <Route path="/kisamyak" element={<Kisamyak/>} />
          <Route path="/tarekan" element={<Tarekan/>} />
          <Route path="/hayt" element={<Hayt/>} />
          <Route path="/kariera" element={<Kariera/>} />
          <Route path="/aravel" element={<Aravel/>} />
          <Route path="/hacax" element={<Hacax/>} />
          <Route path="/yndunvel" element={<Yndunvel/>} />
          <Route path="/practic" element={<Practic/>} />
          <Route path="/usum" element={<Usum/>} />
          <Route path="/bridge" element={<Bridge/>} />
          <Route path="/mek" element={<Mek/>} />
          <Route path="/myus" element={<Myus/>} />
          <Route path="/ereq" element={<Ereq/>} />
          <Route path="/chors" element={<Chors/>} />
          <Route path="/hing" element={<Hing/>} />
          <Route path="/vec" element={<Vec/>} />
          <Route path="/yot" element={<Yot/>} />
          <Route path="/ut" element={<Ut/>} />
          <Route path="/iny" element={<Iny/>} />
          <Route path="/tas" element={<Tas/>} />
          <Route path="/tmek" element={<Tmek/>} />
          <Route path="/terku" element={<Terku/>} />
          <Route path="/hat" element={<Hat/>} />
          <Route path="/part" element={<Part/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;