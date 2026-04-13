import React from 'react'
import Header from "./components/Header";
import Menu from "./pages/Menu";
import HeroSlider from "./pages/HeroSlider";


// TypeScript-ում նախընտրելի է օգտագործել React.FC (Functional Component)
const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Menu />
        <HeroSlider></HeroSlider>
      </main>
      </>
  )
}

export default App