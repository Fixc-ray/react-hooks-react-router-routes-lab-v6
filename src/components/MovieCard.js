import {Link} from 'react-router-dom';

function MovieCard({ title, id }) {
  
  return (
    <div>
        <h2>{title}</h2>
        <Link to= {`/movies/${id}`}>
          View Info
        </Link>
    </div>
  );
};

export default MovieCard;