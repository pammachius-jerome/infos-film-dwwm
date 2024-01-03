import { useParams } from "react-router-dom";
import './List.css';

function List() {
    const films = [
        {
            poster: "/public/images/dwwm_1.png",
            abstract
        }
    ]
    const search = useParams()
    return (
        <div className="container">
            <h2>Liste des films</h2>
            <p>{search.data}</p>
        </div>
    );
}
export default List;