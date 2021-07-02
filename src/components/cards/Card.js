import { ItemCount } from "../itemcount/ItemCount";
import './Card.css';

function Card({ product }) {


    return (

        <div className="form-row text-center p-3 mb-2 bg-dark text-white">
            <div className="container-fluid">

                <h3>{product.title}</h3>
                <img className="img" src={product.pictureURL} />
                <h5>{product.description}</h5>
                <h3>{product.price}</h3>
                <ItemCount stock={product.stock} id={product.id} initial={"1"} />

                <br />
                <a href="#" className='btn btn-light'>GO AHEAD</a>


            </div>
        </div>
    )
}

export default Card;
