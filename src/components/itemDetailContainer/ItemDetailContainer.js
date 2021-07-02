import { useState, useEffect } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail.js";




export const ItemDetailContainer = (props) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://challenge-meli-backend.herokuapp.com/api/items?q=iphone"
                );
            const products = await response.json();
            setProducts(products.items);
            
        };
        getProducts();

    }, []);

    console.log(products.items);

    return (
        <div>
            <ItemDetail products={products} key={products}/>
        </div>
    )
}



