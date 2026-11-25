# CineShelf - stadio 3: la griglia dei film

Da una card a una lista: il componente `MovieList` riceve un array di film e
genera una `MovieCard` per ciascuno con `map`.

## Come si avvia

```bash
npm install
npm run dev
```

## Prompt usato a lezione

Incolla questo testo nel coding agent (è lo stesso della lezione):

```
Nel progetto CineShelf crea src/components/MovieList.jsx che riceve la
prop `movies` (array) e mostra una MovieCard per ogni film usando map,
con key appropriata; se l'array è vuoto mostra 'Nessun film da
mostrare.'. Stile in MovieList.css: griglia responsive con
repeat(auto-fill, minmax(200px, 1fr)). In App.jsx sostituisci le due
card con <MovieList movies={movies} />. Non aggiungere librerie.
```

## Cosa contiene di nuovo

- `src/components/MovieList.jsx`: trasforma l'array `movies` in una lista di
  card con `movies.map(...)`. Ogni card ha `key={movie.imdbID}`: la key serve a
  React per riconoscere gli elementi della lista tra un render e l'altro.
  Se l'array è vuoto mostra un messaggio al posto della griglia.
- `src/components/MovieList.css`: la griglia responsive (generata dal coding
  agent con `grid-template-columns: repeat(auto-fill, ...)`).
- `src/App.jsx`: passa l'intero array `movies` a `MovieList`. Le props
  scendono di un livello: App -> MovieList -> MovieCard.

## Cosa verificare

1. La pagina mostra otto card in griglia, l'ultima con il segnaposto.
2. Rimuovendo la prop `key` in `MovieList.jsx`, la console del browser mostra
   l'avviso "Each child in a list should have a unique key prop".
3. Passando un array vuoto (`<MovieList movies={[]} />`) compare il messaggio
   "Nessun film da mostrare.".
