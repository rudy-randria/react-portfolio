import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
      </div>
    </>
  );
}

export default App;
