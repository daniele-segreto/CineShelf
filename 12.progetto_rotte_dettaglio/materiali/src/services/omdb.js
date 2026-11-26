// Tutte le chiamate a OMDb passano da qui: i componenti non conoscono URL,
// chiave o formato della risposta, ricevono solo dati pronti.
const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

// Risposte che OMDb considera "errori" ma che per noi sono solo "nessun risultato"
const EMPTY_RESULT_ERRORS = ['Movie not found!', 'Too many results.']

async function fetchOmdb(params) {
  const query = new URLSearchParams({ apikey: API_KEY, ...params })
  const response = await fetch(`${BASE_URL}?${query}`)

  // OMDb risponde sempre con un JSON, anche quando qualcosa non va: a volte
  // con status 200 (film non trovato), a volte con 401 (chiave non valida).
  // Il messaggio utile e' in data.Error, quindi leggiamo il JSON prima di
  // guardare lo status.
  const data = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error)
  }

  if (!response.ok) {
    throw new Error(`Errore di rete: ${response.status}`)
  }

  return data
}

export async function searchMovies(query) {
  try {
    const data = await fetchOmdb({ s: query })
    return data.Search
  } catch (err) {
    // "Nessun risultato" non e' un errore per l'utente: lista vuota
    if (EMPTY_RESULT_ERRORS.includes(err.message)) {
      return []
    }
    throw err
  }
}

export async function getMovieById(imdbID) {
  return fetchOmdb({ i: imdbID, plot: 'full' })
}
