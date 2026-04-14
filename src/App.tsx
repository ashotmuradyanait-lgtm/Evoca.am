import React from 'react'
import Header from "./components/Header";
import Menu from "./pages/Menu";
import Anhat from "./pages/Anhat"
import HeroSlider from "./pages/HeroSlider";


// TypeScript-ում նախընտրելի է օգտագործել React.FC (Functional Component)
const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Menu />
        <HeroSlider></HeroSlider>
        <Anhat></Anhat>
      </main>
      </>
  )
}

export default App