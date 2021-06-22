import { ItemCount } from "../itemcount/ItemCount";

export function Card(props) {
    return (
        <div className="card">
            <img src="..." className="card-img" />
            <div className="body">
                <h4>TITLE CARD</h4>
                <ItemCount stock="10" initial="1" />
                <></>
                <a href="#" className='btn btn-primary'>GO AHEAD</a>
            </div>

        </div>
    )
}