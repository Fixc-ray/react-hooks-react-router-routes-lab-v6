import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  }, []);

  const displayMovies = 
  movies.map(movie =>
     <MovieCard 
     key={movie.id} 
     title={movie.title} 
     id={movie.id} 
     />
  );

  return (
    <div>

      <header>
        <NavBar />
      </header>

      <main>
        <h1>Home Page</h1>
        {displayMovies}
      </main>
    </div>
  );
};


export default Home;