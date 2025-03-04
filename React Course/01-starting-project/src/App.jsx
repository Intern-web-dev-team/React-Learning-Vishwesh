import Header from "./components/Header.jsx";
import { useState } from "react";
import CoreConcept from "./components/CoreConcept.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  const [selectedButton, setSelectedButton] = useState();
  function handleSelect(selectedButton) {
    // console.log(selectedButton);
    setSelectedButton(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
