import React from "react";
import "../styles/ProductModal.css";
import ProductGrid from "./ProductGrid";


function ProductModal({ produto, onClose }) {
  if (!produto) return null;
console.log("clicado")
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>{produto.nome}</h2>

        {produto.imagens && produto.imagens.length > 0 && (
          <img src={produto.imagens[0].url} alt={produto.nome} />
        )}

        <p>Marca: {produto.marca}</p>
        <p>
          Preço:{" "}
          {Number(produto.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>Ano: {produto.ano}</p>
        <p>Motor: {produto.motor}</p>
        <p>{produto.descricao}</p>
      </div>
    </div>
  );
}

export default ProductModal;