const axios = require('axios');

const {Movies, MoviesTop, Genres} = require("../db.js")


async function getMoviesDataApi() {
  try {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI2NjE2MWI1OTk4YzkyYjUxOTZiZGU2Yzc0MzQ1YyIsInN1YiI6IjY0YTVlOTJlMDdmYWEyMDEzYjQwYjYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TQ2ivArmonZhBHIvu5v4zhxcobfXYpWN7OE_FTT4yxI',
      },
    };

    const moviesData = await axios.get(url, options);
    const movies = moviesData.data.results;

    for (const movie of movies) {
      const genreIds = movie.genre_ids;

      const genres = await Genres.findAll({
        where: {
          id: genreIds,
        },
      });

      const newMovie = await Movies.create({
        id: movie.id,
        title: movie.original_title || 'No se encontró título',
        img: movie.poster_path || 'No se encontró la imagen',
        date: movie.release_date || 'No se encontró la fecha',
        rate: movie.vote_average || 0,
        description: movie.overview || 'No se encontró la descripción',
      });

      await newMovie.addGenres(genres);
    }

    console.log('Movies inserted into the database');
  } catch (error) {
    console.log('Error:', error);
  }
}



async function getMoviesTopRatedDataApi() {
  try {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI2NjE2MWI1OTk4YzkyYjUxOTZiZGU2Yzc0MzQ1YyIsInN1YiI6IjY0YTVlOTJlMDdmYWEyMDEzYjQwYjYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TQ2ivArmonZhBHIvu5v4zhxcobfXYpWN7OE_FTT4yxI',
      },
    };

    const moviesToRatedData = await axios.get(url, options);
    const moviesTop = moviesToRatedData.data.results;

    for (const movie of moviesTop) {
      const genreIdsTop = movie.genre_ids;

      const genres = await Genres.findAll({
        where: {
          id: genreIdsTop,
        },
      });

      const newMovieTop = await MoviesTop.create({
        id: movie.id,
        title: movie.original_title || 'No se encontró título',
        img: movie.poster_path || 'No se encontró la imagen',
        date: movie.release_date || 'No se encontró la fecha',
        rate: movie.vote_average || 0,
        description: movie.overview || 'No se encontró la descripción',
      });

      await newMovieTop.addGenres(genres);
    }

    console.log('Movies top rated inserted into the database');
  } catch (error) {
    console.log('Error:', error);
  }
}




async function getGenresDataApi() {
  try {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI2NjE2MWI1OTk4YzkyYjUxOTZiZGU2Yzc0MzQ1YyIsInN1YiI6IjY0YTVlOTJlMDdmYWEyMDEzYjQwYjYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TQ2ivArmonZhBHIvu5v4zhxcobfXYpWN7OE_FTT4yxI',
      },
    };

    const genreData = await axios.get(url, options);
    const genreMap = genreData.data.genres.map((e) => ({
      id: e.id !== null ? e.id : 'No se encontro el ID del genero',
      name: e.name !== null ? e.name : 'No se encontro el nombre del genero',
    
    }));

    await Genres.bulkCreate(genreMap)
/*     console.log('Genres in database', genreMap);
 */

  } catch (error) {
    console.log('Error:', error);
  }
}

    const moviesDataInfo = async () => {
      return await Movies.findAll()

    }
    console.log("Movies loaded successfully")

    const moviesTopDataInfo = async () => {
      return await MoviesTop.findAll()

    }
    console.log("MoviesTop loaded successfully")


    const genresDataInfo = async () => {
      return await Genres.findAll()

    }
    console.log("Genres loaded successfully")



    
module.exports = {
  getGenresDataApi,
  getMoviesDataApi,
  getMoviesTopRatedDataApi,
  moviesDataInfo,
  moviesTopDataInfo,
  genresDataInfo  
}



