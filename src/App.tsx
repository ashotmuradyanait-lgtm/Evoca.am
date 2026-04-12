import React from 'react'
import Header from "./components/Header";
import Menu from "./pages/Menu";


// TypeScript-ում նախընտրելի է օգտագործել React.FC (Functional Component)
const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Menu />
      </main>
      </>
  )
}

export default App