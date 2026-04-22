import React from 'react'
import Header from "./components/Header";
import Menu from "./pages/Menu";
import Anhat from "./pages/Anhat"
import HeroSlider from "./pages/HeroSlider";
import EvocaBackground from './pages/EvocaBackground';
import Card from "./pages/Card";
import Calculator from "./pages/Calculator";
import Video from "./pages/Video";
import Brends from "./pages/Brends"


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
      </main>
      </>
  )
}

export default App