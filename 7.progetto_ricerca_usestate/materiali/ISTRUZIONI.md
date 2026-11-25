# CineShelf - stadio 4: la ricerca locale con useState

Arriva la barra di ricerca: un input controllato che filtra la lista dei film
statici mentre scrivi. È il primo pezzo di stato dell'app.

## Come si avvia

```bash
npm install
npm run dev
```

## Prompt usato a lezione

Incolla questo testo nel coding agent (è lo stesso della lezione):

```
Nel progetto CineShelf aggiungi una barra di ricerca. Crea
src/components/SearchBar.jsx come input controllato: riceve `value` e
`onChange` (funzione che riceve il nuovo testo), senza stato interno. In
App.jsx tieni lo stato `query` con useState, passa value e onChange alla
SearchBar e passa a MovieList solo i film il cui titolo contiene la
query (case-insensitive). Stile in SearchBar.css. Non aggiungere
librerie.
```

## Cosa contiene di nuovo

- `src/components/SearchBar.jsx`: un input "controllato". Il testo mostrato è
  sempre la prop `value`; a ogni tasto premuto chiama `onChange` con il nuovo
  testo. Il componente non ha stato proprio: lo riceve dal padre.
- `src/components/SearchBar.css`: stile dell'input (generato dal coding agent).
- `src/App.jsx`: qui vive lo stato `query` (`useState('')`). Sta nel padre
  perché serve a due figli: `SearchBar` lo mostra e lo aggiorna, `MovieList`
  riceve la lista già filtrata. Questo spostamento dello stato verso l'alto
  si chiama "lifting state up".

## Il giro completo di un tasto premuto

1. L'utente scrive nella `SearchBar`: il browser emette l'evento `onChange`.
2. `SearchBar` chiama `onChange(event.target.value)`, cioè `setQuery(...)`.
3. React aggiorna lo stato `query` e ri-esegue la funzione `App`.
4. `App` ricalcola `filteredMovies` e passa la nuova lista a `MovieList`.
5. `MovieList` mostra solo le card che corrispondono.

## Cosa verificare

1. Scrivendo "the" nella barra restano solo i film con "the" nel titolo.
2. Scrivendo un testo che non esiste compare "Nessun film da mostrare.".
3. Svuotando la barra tornano tutti gli otto film.
