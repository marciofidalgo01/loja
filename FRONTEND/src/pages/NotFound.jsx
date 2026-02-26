import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"

function NotFound(){
    return(
    <div id="notfound">
      <h1>Erro: 404</h1>
      <p>Página não encontrada....</p>
      <Link to="/">Voltar para página inicial</Link>
    </div>
    )
}

export default NotFound;