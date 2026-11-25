import MovieCard from './components/MovieCard.jsx'
import { movies } from './data/movies.js'
import './App.css'

function App() {
  const primoFilm = movies[0]
  const filmSenzaLocandina = movies[7]

  return (
    <main className="app">
      <h1>CineShelf</h1>
      <p className="tagline">Il tuo catalogo personale di film</p>

      <section className="cards">
        <MovieCard movie={primoFilm} />
        <MovieCard movie={filmSenzaLocandina} />
      </section>
    </main>
  )
}

export default App
