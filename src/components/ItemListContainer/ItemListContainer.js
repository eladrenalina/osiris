import { useState,useEffect } from "react";
import {ItemList} from '../itemList/ItemList.js';



export const ItemListContainer=({ greeting })=> {
    
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./json/products.json")
      const result = await response.json()
      setTimeout(function () {
        setProducts(result)
      }, 3000);
    }
    fetchData();
  }, [])
  return (
    <div>
      <h1> {greeting}</h1>
      <div className="p-3 mb-2 bg-dark text-white">
        {
          !!products.length
            ? <ItemList products={products} />
            : 'Espere unos segundos!!!'
        }
      </div>
    </div>
  )
}



