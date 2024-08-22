import { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((response) => response.json())
      .then(data => setActors(data))
      .catch(error => console.error(error))
  }, []);

  const actorsList = actors.map
  (actor => <Card 
    key={actor.id} 
    name={actor.name} 
    movies={actor.movies} />)
    
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
          <h1>Actors Page</h1>
        {actorsList}
  
      </main>
    </div>
  );
};


export default Actors;