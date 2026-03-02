import React from "react";
import heroImg from "../assets/testeHero.png";

import "../components/CategorySection"
import "../components/ProductGrid"
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";

function Home(){
    return(
   <div id="homeDiv">
      <div className="heroBanner"  style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="divStyleBanner">
        <h2>
            Seu carro merece o melhor! <span>Peças automotivas</span> de alta qualidade para diversos tipos de carros.
        </h2>
    </div>
    <div className="divStyleBanner">
        <button>
            Botaokkk
        </button>
    </div>  
     </div>

<CategorySection/>
<ProductGrid/>

   </div>
    )
}

export default Home;