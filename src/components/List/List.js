import { useParams } from "react-router-dom";
import './List.css';
import Film from "../Film/Film.js";
import { useState, useEffect } from "react";
import '../../TMDBApi.js'
import { getFilmsFromTMdbWidthText } from "../../TMDBApi.js";

function List() {
    const [films, setFilms] = useState([])
    const search = useParams()
    useEffect(() => {
        getFilmsFromTMdbWidthText(search.data, 1)
        .then(data => {setFilms(data.results)})
    })
    return (
        <div className="container">
            <h2>Liste des films</h2>
            <p>{search.data}</p>
            {films.map((film) => {
                return (
                    <Film key={film.id} poster={film.poster_path} abstract={film.overview} />
                )
            })
            }
        </div>
    );
}
export default List;