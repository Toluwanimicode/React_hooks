import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
    }
  const [movies, setMovies] = useState([]);
  // fetch movies from api
  const fetchMoives = async () => {
    const url = "https://list-movies.p.rapidapi.com/list_movies.json";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d3d34dd43bmshf12eb58e1051496p17b2f3jsn728c67911849",
        "X-RapidAPI-Host": "list-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoives();
  }, []);


  return (
    <div   style={style}>
       {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          imgUrl={movie.medium_cover_image}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          link={movie.url}
        />))} 
    </div>
  );
};

export default MovieList;