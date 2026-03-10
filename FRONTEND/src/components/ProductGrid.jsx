import "../styles/ProductGrid.css";

function ProductGrid({ produtos }) {

 return (
  <div className="product-grid">
   {(produtos || []).map((produto) => (
      <div key={produto.id} className="product-card">

        {produto.imagens && produto.imagens.length > 0 && (
          <img
            src={produto.imagens[0].url}
            alt={produto.nome}
            loading="lazy"
          />
        )}

        <h3>{produto.nome}</h3>

        {produto.marca && (
          <p>Marca: {produto.marca.nome}</p>
        )}

        {produto.categoria && (
          <p>Categoria: {produto.marca}</p>
        )}

        <p>
          {Number(produto.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <p>{produto.descricao}</p>

      </div>
    ))}
  </div>
);
}

export default ProductGrid;