import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import MovieList from './components/MovieList.jsx'
import { searchMovies } from './services/omdb.js'
import './App.css'

const MIN_QUERY_LENGTH = 3

function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query.trim().length < MIN_QUERY_LENGTH) {
      setMovies([])
      setError(null)
      return
    }

    // Se l'utente continua a scrivere, la risposta di una ricerca vecchia
    // potrebbe arrivare dopo quella nuova: con questo flag la ignoriamo.
    let ignore = false
    setLoading(true)
    setError(null)

    searchMovies(query)
      .then((results) => {
        if (!ignore) setMovies(results)
      })
      .catch((err) => {
        if (!ignore) setError(err.message)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [query])

  return (
    <main className="app">
      <h1>CineShelf</h1>
      <p className="tagline">Il tuo catalogo personale di film</p>

      <SearchBar value={query} onChange={setQuery} />

      {query.trim().length < MIN_QUERY_LENGTH && (
        <p className="hint">Scrivi almeno {MIN_QUERY_LENGTH} lettere per cercare.</p>
      )}
      {loading && <p className="hint">Caricamento...</p>}
      {error && <p className="error">Errore: {error}</p>}
      {!loading && !error && query.trim().length >= MIN_QUERY_LENGTH && (
        <MovieList movies={movies} />
      )}
    </main>
  )
}

export default App
