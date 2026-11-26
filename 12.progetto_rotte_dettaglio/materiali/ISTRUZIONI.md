# CineShelf - stadio 7: rotte e pagina di dettaglio

CineShelf diventa una single page application con più pagine: la ricerca
sta in `/`, il dettaglio di un film in `/movie/:id`, e una navbar collega
tutto senza mai ricaricare la pagina.

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
Aggiungi React Router (react-router-dom). Avvolgi App in BrowserRouter in
main.jsx. Sposta la ricerca in src/pages/Home.jsx. Crea
src/pages/MovieDetail.jsx per la rotta /movie/:id: legge l'id con
useParams e mostra locandina, titolo, anno, durata, genere, voto IMDb,
trama, regia e cast usando un nuovo hook useMovie(id) in src/hooks e una
funzione getMovieById in services/omdb.js (parametro i= e plot=full). Crea
src/components/Navbar.jsx con NavLink; in App.jsx metti Navbar fuori da
Routes e le rotte /, /movie/:id e * (pagina non trovata). MovieCard deve
avere un Link alla pagina di dettaglio. Niente librerie oltre a
react-router-dom, CSS in file separati come il resto del progetto.
```

## Cosa contiene di nuovo

- Dipendenza `react-router-dom` (installata con `npm install react-router-dom`).
- `src/main.jsx`: `BrowserRouter` avvolge l'intera app e tiene sincronizzati
  URL del browser e componenti mostrati.
- `src/App.jsx`: la mappa delle rotte con `Routes` e `Route`. Ogni `Route`
  associa un percorso a un componente; `:id` è un segmento dinamico e `*`
  cattura gli URL sconosciuti.
- `src/components/Navbar.jsx`: intestazione con `NavLink`, che aggiunge da
  solo la classe `active` al link della pagina corrente.
- `src/pages/Home.jsx`: la ricerca che prima stava in `App`.
- `src/pages/MovieDetail.jsx`: legge l'id dall'URL con `useParams` e mostra
  trama, regia, cast e voto IMDb.
- `src/hooks/useMovie.js` e `getMovieById` in `services/omdb.js`: la seconda
  chiamata a OMDb, per un singolo film (parametro `i=` invece di `s=`).
- `MovieCard` ora è avvolta in un `Link` verso `/movie/<imdbID>`.

## Cosa verificare

1. Cliccando una card l'URL diventa `/movie/tt...` e compare il dettaglio,
   senza che la pagina lampeggi (nessun ricaricamento).
2. Il pulsante Indietro del browser riporta alla ricerca.
3. Aprendo direttamente `http://localhost:5173/movie/tt0133093` si vede il
   dettaglio di The Matrix.
4. Un URL inventato (`/pippo`) mostra "Pagina non trovata.".
