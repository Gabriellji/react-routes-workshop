import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <div>
      {!props.location.state ? (
        <h1>You havent add any movies yet...</h1>
      ) : (
        <>
          <h1>{props.location.state.randomMovie.title}</h1>
          <img
            src={props.location.state.randomMovie.posterUrl}
            alt={props.location.state.randomMovie.title}
          />
          <p>{props.location.state.randomMovie.year}</p>
          <p>{props.location.state.randomMovie.director}</p>
          <p></p>
          <button>
            <Link to="list">Go back</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Movie;
