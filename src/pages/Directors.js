import { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from '../components/NavBar';

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((response) => response.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error))
  }, []);

  const directorsList = 
  directors.map(director => 
  <Card 
    key={director.id} 
    name={director.name} 
    movies={director.movies} 
    />)

    return (
      <div>

      <header>
        <NavBar />
      </header>

      <main>
        <h1>Directors Page</h1>
        {directorsList}
      </main>

    </div>
    );
  };
  

export default Directors;