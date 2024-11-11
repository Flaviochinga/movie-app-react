
import './App.css'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api/movies'
import { MovieType } from './types/movieTypes';
import {useState} from "react";

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const fetchMovie = async() =>{

     result = await getMovies();
  }
  let movies: MovieType[] = [];
  const movieMock = async () => {
    movies = await getMovies();
  }

  movieMock();
  console.log("sono nel componente app");

  return (
    <div>
      <h1> Questo è il componente React che rappresenta l'intera applicazione</h1>
        {
                movies? movies.map((movie) => {

                  return <MovieCard key={movie.id} movie={movie} />
                })

          : <h2>Caricamento in corso...</h2>
          
        }
        </div>
  )
}