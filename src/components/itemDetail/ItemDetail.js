import React from "react"




export function ItemDetail({ products }) {


    return (
        <div className="p-3 mb-2 bg-dark text-white">
            <h1 className="text-center"> PRODUCTOS DE PRIMERA</h1>
            <div className="form-row text-center">{
                products.length < 1 ? <p> No tengo Productos</p> : products.map((product) => <h2>{product.title},<br></br>,<img src={product.thumbnail} />,<p>${product.price.amount},{product.price.decimals} {product.price.currency} </p></h2>
                )
            }
            <button className="btn text-center btn-secondary">Comprar</button>
            </div>
        </div>
    )
}