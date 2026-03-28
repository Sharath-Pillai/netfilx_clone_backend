export const API_KEY = '95d56169a6bc70a43b410f9c67b2f325';
export const base_Url = 'https://api.themoviedb.org/3';

// TMDB endpoints
export const trendingUrl = `${base_Url}/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const originalsUrl = `${base_Url}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actionUrl = `${base_Url}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedyUrl = `${base_Url}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horrorUrl = `${base_Url}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romanceUrl = `${base_Url}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentariesUrl = `${base_Url}/discover/movie?api_key=${API_KEY}&with_genres=99`;