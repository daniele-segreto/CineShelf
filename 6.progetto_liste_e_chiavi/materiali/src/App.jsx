import MovieList from './components/MovieList.jsx'
import { movies } from './data/movies.js'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>CineShelf</h1>
      <p className="tagline">Il tuo catalogo personale di film</p>

      <MovieList movies={movies} />
    </main>
  )
}

export default App
