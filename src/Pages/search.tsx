import { useState } from "react";
import ProductCard from "../Components/product-card";

function Search() {
  const [search, setSearch]=useState("");
  const [sort, setSort]=useState("");
  const [maxPrice, setMaxPrice]=useState(100000)
  const [category, setCategory]=useState("");
  const [page, setPage]=useState(1)

  const isPrevPage = page> 1;
  const isNextPage = page < 4;
  const addToHandler =() =>{

  }
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e)=> setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dec">Price (High to Low)</option>
          </select>
        </div>


        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
          type="range"
          min={100}
          max={100000}
           value={maxPrice} 
           onChange={(e)=> setMaxPrice(Number(e.target.value))}/>      
        </div>


        <div>
          <h4>Category</h4>
          <select value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="asc">sample 1</option>
            <option value="dec">sample 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />


        <div className="search-product-list">
          <ProductCard productId="adasdasd" name="Macbook" price={4545} stock={346} handler={addToHandler} 
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"/>
        </div>


        <article>
          <button 
          disabled ={!isPrevPage}
          onClick={()=>setPage((prev)=> prev - 1)}>prev</button>
          <span>
            {page} of {4}
          </span>
          <button
          disabled= {!isNextPage}
           onClick={()=>setPage((prev)=> prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  )
}

export default Search;