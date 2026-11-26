import { useEffect, useState } from 'react'
import { searchMovies } from '../services/omdb.js'

export const MIN_QUERY_LENGTH = 3

// Custom hook: una normale funzione che inizia con "use" e dentro usa altri
// hook. Racchiude tutta la logica di ricerca (stato + effetto) e restituisce
// solo cio' che serve al componente per disegnare.
export function useMovies(query) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const isQueryValid = query.trim().length >= MIN_QUERY_LENGTH

  useEffect(() => {
    if (!isQueryValid) {
      setMovies([])
      setError(null)
      return
    }

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
  }, [query, isQueryValid])

  return { movies, loading, error, isQueryValid }
}
