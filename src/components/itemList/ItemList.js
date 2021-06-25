import React from 'react';
import Card from '../cards/Card';


export function ItemList({ products }) {
    return (
        <div>
            {
                products.map(product => {
                    return <Card product={product} key={product.id} />
                })
            }
        </div>
    )
}