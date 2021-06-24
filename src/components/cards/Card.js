import { ItemCount } from "../itemcount/ItemCount";

function Card({ product }) {


    return (
        <div className="card">

            <h3>{product.title}</h3>
            <img src={product.pictureURL} />
            <h5>{product.description}</h5>
            <h3>{product.price}</h3>
            <h4>Montgomery</h4>
            <ItemCount stock={product.stock} id={product.id} />

            <br />
            <a href="#" className='btn btn-primary'>GO AHEAD</a>


        </div>
    )
}

export default Card;