import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar/>
      </div>
    </>
  );
}

export default App;
