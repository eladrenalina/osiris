import { useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        async function getData(term) {
            const reponse = await fetch('...')
            const data = await Response.json();
            setListProducts(data)
        }
        getData('auto')
    }, [])

    return(<CartContext.Provider value={{listProducts}}>
        {listProducts.length == 0?
        <h3> Estamos cargando Productos</h3> : children}
    </CartContext.Provider>)
}