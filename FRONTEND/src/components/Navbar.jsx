import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className="navbar">
          <Link to="/"><div className="logo">Home</div></Link>

          <Link to="Carrinho"><div className="carrinhoLink">Carrinho</div></Link>

            <div className="darkmode">

            </div>
            <div className="filtro">

            </div>
            <div className="contato">

            </div>
        </nav>
    )
}

export default Navbar;