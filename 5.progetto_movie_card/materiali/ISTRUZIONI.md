# CineShelf - stadio 2: la card del film

Primo componente vero dell'app: `MovieCard`, che riceve un film tramite
props e lo mostra con locandina, titolo, anno e tipo.

## Come si avvia

```bash
npm install
npm run dev
```

## Prompt usato a lezione

Incolla questo testo nel coding agent (è lo stesso della lezione):

```
Nel progetto CineShelf crea il componente MovieCard in
src/components/MovieCard.jsx. Riceve una prop `movie` con i campi Title,
Year, Type, Poster (stessi nomi dell'API OMDb). Mostra locandina, titolo,
anno e tipo; se Poster vale la stringa 'N/A' mostra un riquadro
'Nessuna locandina' al posto dell'immagine. Metti lo stile in
MovieCard.css (card scura, larghezza 200px, locandina con aspect-ratio
2/3). Crea anche src/data/movies.js con 8 film di esempio nella stessa
forma, uno dei quali con Poster 'N/A'; per le locandine usa immagini
locali in public/posters/. In App.jsx mostra due card: la prima e quella
senza locandina. Non aggiungere librerie.
```

## Cosa contiene di nuovo

- `src/components/MovieCard.jsx`: il componente card. Riceve `movie` come prop
  e usa le espressioni tra graffe per mostrare i dati; se `Poster` vale `"N/A"`
  mostra un segnaposto invece dell'immagine (rendering condizionale).
- `src/components/MovieCard.css`: lo stile della card (generato dal coding agent).
- `src/data/movies.js`: otto film di esempio con la stessa forma dei risultati
  di OMDb, così i componenti non cambieranno quando arriveranno i dati veri.
- `public/posters/*.svg`: locandine segnaposto locali, usate solo finché non
  chiamiamo l'API.
- `src/App.jsx`: mostra due card, una con locandina e una senza.

## Cosa verificare

1. La pagina mostra due card: "The Shawshank Redemption" con locandina e
   "Spirited Away" con il segnaposto "Nessuna locandina".
2. Cambiando `movies[0]` in `movies[1]` dentro `App.jsx` la prima card cambia
   film senza toccare `MovieCard.jsx`.
3. In `MovieCard.jsx` le graffe `{}` contengono JavaScript, non testo.
