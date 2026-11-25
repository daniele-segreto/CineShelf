import MovieCard from './MovieCard.jsx'
import './MovieList.css'

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="movie-list__empty">Nessun film da mostrare.</p>
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        // La key deve essere stabile e unica: l'id di IMDb e' perfetto,
        // l'indice dell'array no (cambia quando la lista viene filtrata).
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  )
}

export default MovieList
