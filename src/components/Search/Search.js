import { useNavigate } from 'react-router-dom';
import './Search.css'

function Search() {
    const naviguate = useNavigate()
    const handleSubmit = (e) => {
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData);
        console.log(formData.get('search'));
        naviguate(`/List/${formData.get('search')}`)
    }
    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="idSearch">Votre recherche</label>
                    <input type="text" id='idSearch' name='search' />
                </fieldset>
                <input type="submit" value="Recherche" />
            </form>
        </div>
    );
}

export default Search;