import { useState,useEffect } from "react";
import {ItemList} from '../itemList/ItemList.js';

function ItemListContainer({ greeting, buyProduct }) {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const response = await fetch("./json/products.json")
        const json = await response.json()
        setProducts(json)
        console.log(json)
    }, [])

    return (
        <div>
            <h1> {greeting}</h1>
            <div>
                <ItemList products={products} />
            </div>

        </div>
    )
}

export default ItemListContainer



