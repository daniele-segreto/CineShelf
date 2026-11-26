import { Link, useParams } from 'react-router-dom'
import { useMovie } from '../hooks/useMovie.js'
import './MovieDetail.css'

function MovieDetail() {
  // useParams legge i segmenti dinamici della rotta: per /movie/tt0133093
  // restituisce { id: 'tt0133093' }
  const { id } = useParams()
  const { movie, loading, error } = useMovie(id)

  if (loading) return <p className="hint">Caricamento...</p>
  if (error) return <p className="error">Errore: {error}</p>
  if (!movie) return null

  const hasPoster = movie.Poster !== 'N/A'

  return (
    <article className="detail">
      <Link to="/" className="detail__back">
        Torna alla ricerca
      </Link>

      <div className="detail__layout">
        {hasPoster ? (
          <img className="detail__poster" src={movie.Poster} alt={`Locandina di ${movie.Title}`} />
        ) : (
          <div className="detail__poster detail__poster--placeholder">Nessuna locandina</div>
        )}

        <div className="detail__info">
          <h1 className="detail__title">
            {movie.Title} <span className="detail__year">({movie.Year})</span>
          </h1>
          <p className="detail__meta">
            {movie.Runtime} &middot; {movie.Genre} &middot; IMDb {movie.imdbRating}
          </p>
          <p className="detail__plot">{movie.Plot}</p>
          <dl className="detail__credits">
            <dt>Regia</dt>
            <dd>{movie.Director}</dd>
            <dt>Cast</dt>
            <dd>{movie.Actors}</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}

export default MovieDetail
