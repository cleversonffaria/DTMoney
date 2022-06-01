import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.loteriasonline.caixa.gov.br/silce-web/?utm_source=site_loterias&utm_medium=cross&utm_campaign=loteriasonline&utm_term=lotomania#/compras/23825296"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resultado
        </a>
      </header>
    </div>
  );
}

export default App;
