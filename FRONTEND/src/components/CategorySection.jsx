import React, { useState } from "react";
import "../styles/CategorySection.css";

function CategorySection() {

const [openFilter, setOpenFilter] = useState(null)

const [filters, setFilters] = useState({
categoria: [],
marca: [],
ano: [],
motor: [],
preco: []
})

function toggleFilter(filter){
setOpenFilter(openFilter === filter ? null : filter)
}

function toggleOption(filter, value){

setFilters(prev => {

const exists = prev[filter].includes(value)

return{
...prev,
[filter]: exists
? prev[filter].filter(item => item !== value)
: [...prev[filter], value]
}

})

}

function clearFilters(){

setFilters({
categoria: [],
marca: [],
ano: [],
motor: [],
preco: []
})

}

function Option({filter,value}){

const selected = filters[filter].includes(value)

return(

<div
className="option"
onClick={(e)=>{
e.stopPropagation()
toggleOption(filter,value)
}}
>

<input
type="checkbox"
checked={selected}
readOnly
className="inputCheckBoxCategory"
/>

<span>{value}</span>

</div>

)

}

return(

<section className="categorySection">

<h2 className="filterTitle">Filtrar Peças</h2>

<div className="filtersContainer">


<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("categoria")}
>

<span>Categoria</span>

<div className={`options ${openFilter === "categoria" ? "open" : ""}`}>

<Option filter="categoria" value="Motor"/>
<Option filter="categoria" value="Freios"/>
<Option filter="categoria" value="Suspensão"/>
<Option filter="categoria" value="Elétrica"/>
<Option filter="categoria" value="Arrefecimento"/>

</div>

</div>

</div>



<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("marca")}
>

<span>Marca do Veículo</span>

<div className={`options ${openFilter === "marca" ? "open" : ""}`}>

<Option filter="marca" value="Ford"/>
<Option filter="marca" value="Chevrolet"/>
<Option filter="marca" value="Volkswagen"/>
<Option filter="marca" value="Fiat"/>
<Option filter="marca" value="Toyota"/>

</div>

</div>

</div>



<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("ano")}
>

<span>Ano</span>

<div className={`options ${openFilter === "ano" ? "open" : ""}`}>

<Option filter="ano" value="2024"/>
<Option filter="ano" value="2023"/>
<Option filter="ano" value="2022"/>
<Option filter="ano" value="2021"/>
<Option filter="ano" value="2020"/>

</div>

</div>

</div>



<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("motor")}
>

<span>Tipo de Motor</span>

<div className={`options ${openFilter === "motor" ? "open" : ""}`}>

<Option filter="motor" value="1.0"/>
<Option filter="motor" value="1.4"/>
<Option filter="motor" value="1.6"/>
<Option filter="motor" value="2.0"/>
<Option filter="motor" value="Diesel"/>

</div>

</div>

</div>


<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("preco")}
>

<span>Preço</span>

<div className={`options ${openFilter === "preco" ? "open" : ""}`}>

<Option filter="preco" value="Até R$100"/>
<Option filter="preco" value="R$100 - R$300"/>
<Option filter="preco" value="R$300 - R$700"/>
<Option filter="preco" value="R$700+"/>

</div>

</div>

</div>


<button className="filterButton">
Buscar Peças
</button>

<button
className="filterButton"
onClick={clearFilters}
>
Limpar filtros
</button>

</div>

</section>

)

}

export default CategorySection