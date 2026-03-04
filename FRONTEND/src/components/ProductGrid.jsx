import React from "react";
import "../styles/ProductGrid.css";

import { useEffect, useState } from "react";

function ProductGrid() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/produtos/")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="product-grid">
      {produtos.map((produto) => (
        <div key={produto.id} className="product-card">
          <img src={produto.url_imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco}</p>
          <p>{produto.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;