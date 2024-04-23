export const API_KEY = '89453aec0dad86e73c019c6bbe43cb21';
export const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en=US` ,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_reted?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
   
}

export default requests;