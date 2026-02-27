import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css";

function Navbar() {

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="navbar">

      <Link to="/">
        <img src="./logo.png" alt="Logo" className="logo" />
      </Link>

      <Link to="Carrinho">
        <img src="./carrinho.png" alt="Carrinho" className="carrinho" />
      </Link>

      <button
        className={`btn ${dark ? "btn-light" : "btn-dark"}`}
        onClick={() => setDark(!dark)}
      >
        {dark ? "☀️" : "🌙"}
      </button>

      <div className="filtro">
        <img src="./lupa2.png" alt="Lupa" className="lupa" />
        <input
          type="text"
          placeholder="Pesquisar..."
          id="inputPesquisar"
        />
      </div>

      <a href="#">
        <div className="zapzap">
          <img src="./zapzap.png" alt="Zapzap" id="zapImg" />
          Falar no WhatsApp
        </div>
      </a>

    </nav>
  );
}

export default Navbar;