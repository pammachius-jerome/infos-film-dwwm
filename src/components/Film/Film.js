import './Film.css';

function Film({abstract, poster}) {

    return (
        <div className='film'>
            <img src={poster} alt="poster du film" />
            <p>{abstract}</p>
        </div>
    );
}
export default Film;