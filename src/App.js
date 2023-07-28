import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setmovies] = useState([])
  const [isLoading, setisLoading] = useState(false)
  async function fetchMoviesHandler(){
    setisLoading(true)
    const response=await fetch('https://swapi.dev/api/films/');
    const data=await response.json();
      const transformedMovies=data.results.map(moviedata=>{
        return {
          id:moviedata.episode_id,
          title:moviedata.title,
          openingText:moviedata.opening_crawl,
          releaseDate:moviedata.release_date


        }
      })
      setmovies(transformedMovies);
      setisLoading(false)
    };
  
 
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
