const API_TOKEN = "7bbc6283aebb7460298db373f9398da3";
export function getFilmsFromTMdbWidthText(text, page) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text + '&page' + page;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.lor(error))
}