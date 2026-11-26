import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import MovieList from './components/MovieList.jsx'
import { useMovies, MIN_QUERY_LENGTH } from './hooks/useMovies.js'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const { movies, loading, error, isQueryValid } = useMovies(query)

  return (
    <main className="app">
      <h1>CineShelf</h1>
      <p className="tagline">Il tuo catalogo personale di film</p>

      <SearchBar value={query} onChange={setQuery} />

      {!isQueryValid && (
        <p className="hint">Scrivi almeno {MIN_QUERY_LENGTH} lettere per cercare.</p>
      )}
      {loading && <p className="hint">Caricamento...</p>}
      {error && <p className="error">Errore: {error}</p>}
      {!loading && !error && isQueryValid && <MovieList movies={movies} />}
    </main>
  )
}

export default App
