import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import MovieList from './components/MovieList.jsx'
import { movies } from './data/movies.js'
import './App.css'

function App() {
  // Lo stato della ricerca vive qui, nel padre, perche' serve a due figli:
  // SearchBar lo mostra e lo aggiorna, MovieList lo usa per filtrare.
  const [query, setQuery] = useState('')

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="app">
      <h1>CineShelf</h1>
      <p className="tagline">Il tuo catalogo personale di film</p>

      <SearchBar value={query} onChange={setQuery} />
      <MovieList movies={filteredMovies} />
    </main>
  )
}

export default App
