// Tutte le chiamate a OMDb passano da qui: i componenti non conoscono URL,
// chiave o formato della risposta, ricevono solo un array di film.
const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

// Risposte che OMDb considera "errori" ma che per noi sono solo "nessun risultato"
const EMPTY_RESULT_ERRORS = ['Movie not found!', 'Too many results.']

export async function searchMovies(query) {
  const params = new URLSearchParams({ apikey: API_KEY, s: query })
  const response = await fetch(`${BASE_URL}?${params}`)

  // OMDb risponde sempre con un JSON, anche quando qualcosa non va: a volte
  // con status 200 (film non trovato), a volte con 401 (chiave non valida).
  // Il messaggio utile e' in data.Error, quindi leggiamo il JSON prima di
  // guardare lo status.
  const data = await response.json()

  if (data.Response === 'False') {
    if (EMPTY_RESULT_ERRORS.includes(data.Error)) {
      return []
    }
    throw new Error(data.Error)
  }

  if (!response.ok) {
    throw new Error(`Errore di rete: ${response.status}`)
  }

  return data.Search
}
