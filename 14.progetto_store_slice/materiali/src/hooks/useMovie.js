import { useEffect, useState } from 'react'
import { getMovieById } from '../services/omdb.js'

// Stesso schema di useMovies, ma per un singolo film: riceve l'id e
// restituisce il dettaglio, con caricamento ed errore.
export function useMovie(imdbID) {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    setLoading(true)
    setError(null)

    getMovieById(imdbID)
      .then((data) => {
        if (!ignore) setMovie(data)
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
  }, [imdbID])

  return { movie, loading, error }
}
