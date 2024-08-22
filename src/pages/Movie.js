import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie))
  }, [id]);

  // if(!movie.title){
  //   return <h1>Loading...</h1>
  // }

  return (
    <div> 

      <header>
        <NavBar />
      </header>

      <main>
        <article>
          <h1>{movie.title}</h1>
          <p>{movie.time}</p>
        </article>
      </main>
    </div>
  );
};

export default Movie;