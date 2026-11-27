import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({ movie }) {
  // OMDb usa la stringa "N/A" quando la locandina non esiste
  const hasPoster = movie.Poster !== 'N/A'

  return (
    // Link e' il tag <a> di React Router: cambia URL senza ricaricare la pagina
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      {hasPoster ? (
        <img
          className="movie-card__poster"
          src={movie.Poster}
          alt={`Locandina di ${movie.Title}`}
        />
      ) : (
        <div className="movie-card__placeholder">Nessuna locandina</div>
      )}
      <div className="movie-card__body">
        <h2 className="movie-card__title">{movie.Title}</h2>
        <p className="movie-card__meta">
          {movie.Year} &middot; {movie.Type}
        </p>
      </div>
    </Link>
  )
}

export default MovieCard
