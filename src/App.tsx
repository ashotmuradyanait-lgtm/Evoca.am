import React from 'react'
import Header from "./components/Header";
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
import Reviews from "./pages/Reviews"


// TypeScript-ում նախընտրելի է օգտագործել React.FC (Functional Component)
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
      </>
  )
}

export default App