import { ItemCount } from "../itemcount/ItemCount";

export function Card(props) {
    return (
        <div className="card">
            <div>
                <img src="src\img\montgomery.jpg" className="card-img" />
            </div>
            <div className="body">
                <h4>Montgomery</h4>
                <ItemCount stock="10" initial="1" />
                <></>
                <a href="#" className='btn btn-primary'>GO AHEAD</a>
            </div>

        </div>
    )
}