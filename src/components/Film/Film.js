import './Film.css';

function Film({abstract, poster}) {

    return (
        <div className='film'>
            <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="poster du film" />
            <p>{abstract}</p>
        </div>
    );
}
export default Film;