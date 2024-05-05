import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar/>
        <Intro/>
      </div>
    </>
  );
}

export default App;
