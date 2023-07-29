import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setmovies] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [error, seterror] = useState(null)
  async function fetchMoviesHandler(){
    setisLoading(true);
    seterror(null);
    try{
      const response=await fetch('https://swapi.dev/api/film/');
      if(!response.ok){
        throw new Error('Something Went wrong ')
      }
      
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
    }catch(error){
   seterror(error.message)
    }
    setisLoading(false)
    };
    let content=<p>Found no movies.</p>;
    if(movies.length>0){
      content=<MoviesList movies={movies} />
    }
    if(error){
     content=<p>{error}</p>
     
    }
    if(isLoading){
      content=<p>Loading...</p>;
    }
  
 
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
