# CineShelf - stadio 6: il custom hook useMovies

Stessa app dello stadio precedente, ma la logica di ricerca (stati ed
effetto) è uscita da `App` ed è entrata nel custom hook `useMovies`.

## Prima di avviare

Serve il file `.env` con la tua chiave OMDb (vedi `.env.example`).

## Come si avvia

```bash
npm install
npm run dev
```

## Prompt usato a lezione

Incolla questo testo nel coding agent (è lo stesso della lezione):

```
Estrai la logica di ricerca da App.jsx in un custom hook useMovies(query)
in src/hooks/useMovies.js: deve contenere gli stati movies/loading/error e
l'effetto, ed esportare anche la costante MIN_QUERY_LENGTH; restituisce
{ movies, loading, error, isQueryValid }. App.jsx deve restare solo con lo
stato dell'input e il JSX. Non cambiare il comportamento dell'app e non
toccare services/omdb.js.
```

## Cosa contiene di nuovo

- `src/hooks/useMovies.js`: una funzione che inizia con `use` e che dentro
  usa `useState` e `useEffect`. Riceve la `query`, fa tutto il lavoro e
  restituisce `{ movies, loading, error, isQueryValid }`. È il pattern di
  riuso di React: la logica si sposta in un hook, non in un componente.
- `src/App.jsx`: da 40 righe a 20. Tiene solo lo stato dell'input e chiama
  `useMovies(query)`; il resto è puro JSX di presentazione.

## Perché conviene

- `App` legge meglio: si vede subito cosa mostra, non come lo ottiene.
- Domani la stessa ricerca potrà servire in un'altra pagina: basta chiamare
  `useMovies` anche lì.
- La logica si può leggere, capire e correggere in un file solo.

## Cosa verificare

1. L'app si comporta esattamente come prima (ricerca, caricamento, errori).
2. In `App.jsx` non compaiono più `useEffect` né `searchMovies`.
3. Rinominando `useMovies` in `getMovies` il linter segnala un errore:
   le regole degli hook valgono solo per le funzioni che iniziano con `use`.
