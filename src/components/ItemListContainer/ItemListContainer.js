import { useState,useEffect } from "react";
import {ItemList} from '../itemList/ItemList.js';

export const ItemListContainer=({ greeting })=> {

    const [products, setProducts] = useState([])

    useEffect(async () => {
        const response = await fetch("./json/products.json")
        const result = await response.json()
        setProducts(result)
        console.log(result)
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



