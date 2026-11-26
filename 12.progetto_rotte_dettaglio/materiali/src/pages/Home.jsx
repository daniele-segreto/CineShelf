import { useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import MovieList from '../components/MovieList.jsx'
import { useMovies, MIN_QUERY_LENGTH } from '../hooks/useMovies.js'

function Home() {
  const [query, setQuery] = useState('')
  const { movies, loading, error, isQueryValid } = useMovies(query)

  return (
    <>
      <h1 className="page-title">Cerca un film</h1>

      <SearchBar value={query} onChange={setQuery} />

      {!isQueryValid && (
        <p className="hint">Scrivi almeno {MIN_QUERY_LENGTH} lettere per cercare.</p>
      )}
      {loading && <p className="hint">Caricamento...</p>}
      {error && <p className="error">Errore: {error}</p>}
      {!loading && !error && isQueryValid && <MovieList movies={movies} />}
    </>
  )
}

export default Home
