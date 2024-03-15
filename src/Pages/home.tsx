import { Link } from "react-router-dom"
import ProductCard from "../Components/product-card"

function Home() {
  const addToHandler =()=>{

  }
  return (
    <div className="home">
      <section></section>
        <h2>Latest Products

          <Link to="/search" className="findmore">More</Link>
        </h2>
        <main>
          <ProductCard productId="adasdasd" name="Macbook" price={4545} stock={346} handler={addToHandler} 
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
          />

        </main>
    </div>
  )
}

export default Home