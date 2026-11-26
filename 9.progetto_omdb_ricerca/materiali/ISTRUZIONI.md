# CineShelf - stadio 5: la ricerca vera su OMDb

I dati statici spariscono: la barra di ricerca interroga le API di OMDb e la
griglia mostra i risultati veri, con stati di caricamento ed errore.

## Prima di avviare: la chiave OMDb

1. Richiedi una chiave gratuita su https://www.omdbapi.com/apikey.aspx
   (piano FREE, 1000 richieste al giorno) e attivala dal link ricevuto via email.
2. Copia `.env.example` in un nuovo file `.env` nella radice del progetto.
3. Sostituisci `la_tua_chiave` con la chiave ricevuta.

Il file `.env` non va mai condiviso né messo su git: contiene la tua chiave.

## Come si avvia

```bash
npm install
npm run dev
```

Se hai creato il `.env` mentre il server era già in esecuzione, fermalo e
rilancialo: Vite legge le variabili solo all'avvio.

## Prompt usato a lezione

Incolla questo testo nel coding agent (è lo stesso della lezione):

```
Sostituisci i dati statici con le API di OMDb (https://www.omdbapi.com/,
parametro s= per la ricerca, apikey da variabile d'ambiente
VITE_OMDB_API_KEY). Crea src/services/omdb.js con una funzione async
searchMovies(query) che usa fetch, legge sempre il JSON e gestisce il caso
Response === 'False' di OMDb (restituisci [] per 'Movie not found!' e 'Too
many results.', lancia un errore con data.Error negli altri casi, anche
quando lo status non è 200), e solo dopo controlla response.ok per gli
errori di rete. In App.jsx usa useEffect per chiamarla quando query cambia,
solo da 3 caratteri in su, con stati loading ed error mostrati in pagina;
gestisci le risposte in ritardo con una flag nel cleanup. Rimuovi
src/data/movies.js e public/posters/. Crea .env.example con il segnaposto
della chiave. Non aggiungere librerie.
```

## Cosa contiene di nuovo

- `src/services/omdb.js`: la funzione `searchMovies(query)` costruisce l'URL
  con `URLSearchParams`, chiama `fetch`, controlla `response.ok` e poi il campo
  `Response` del JSON: OMDb risponde 200 anche quando c'è un problema, e in
  quel caso l'errore sta in `data.Error`. "Movie not found!" e "Too many
  results." diventano semplicemente un array vuoto.
- `src/App.jsx`: l'effetto `useEffect(..., [query])` parte a ogni cambio della
  ricerca (da tre lettere in su), imposta `loading`, chiama il servizio e
  salva risultati o errore nello stato. La funzione di cleanup imposta
  `ignore = true` così una risposta arrivata in ritardo non sovrascrive quella
  più recente.
- `.env.example`: il modello del file `.env` con il segnaposto della chiave.
- Rimossi `src/data/movies.js` e `public/posters/`: non servono più.

## Cosa verificare

1. Scrivendo "matrix" compaiono i film con le locandine vere di OMDb.
2. Con meno di tre lettere la griglia non parte e compare il suggerimento.
3. Con una chiave sbagliata nel `.env` compare "Errore: Invalid API key!".
4. Nella scheda Network degli strumenti per sviluppatori si vedono le
   richieste a omdbapi.com, una per ogni cambio di testo.
