import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Anhat from "./pages/Anhat"
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
    <>
      <Header />

      <main>
        <Menu />
        <HeroSlider></HeroSlider>
        <Anhat></Anhat>
        <EvocaBackground/>
        <Card/>
        <Calculator/>
        <Video/>
        <Brends></Brends>
        <News></News>
        <Money></Money>
        <Reviews></Reviews>
      </main>

      <Footer></Footer>
      </>
  )
}

export default App