# CineShelf - stadio 8: store e slice della watchlist

Entra Redux Toolkit. L'interfaccia non cambia ancora: in questo stadio si
costruisce lo store globale e lo slice della watchlist, e si collega lo
store all'app con `Provider`.

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
Aggiungi Redux Toolkit e react-redux al progetto CineShelf. Crea
src/store/watchlistSlice.js con createSlice: nome 'watchlist', stato
iniziale { items: [] }, reducer addMovie (payload: il film; non aggiungere
duplicati per imdbID) e removeMovie (payload: imdbID). Crea
src/store/index.js con configureStore e registra lo slice sotto la chiave
watchlist. In main.jsx avvolgi l'app con Provider. Non cambiare ancora
l'interfaccia e non aggiungere altre librerie.
```

## Cosa contiene di nuovo

- Dipendenze `@reduxjs/toolkit` e `react-redux`.
- `src/store/watchlistSlice.js`: lo slice `watchlist`, con lo stato iniziale
  `{ items: [] }` e due reducer, `addMovie` e `removeMovie`. `createSlice`
  genera da solo le azioni con lo stesso nome. Dentro i reducer si scrive
  codice che sembra mutare lo stato (`state.items.push(...)`): è Immer, la
  libreria integrata in Redux Toolkit, a trasformarlo in un nuovo oggetto.
- `src/store/index.js`: `configureStore` crea lo store unico dell'app; ogni
  chiave dell'oggetto `reducer` diventa un ramo dello stato globale
  (`state.watchlist`). Le Redux DevTools sono già attive.
- `src/main.jsx`: `Provider` avvolge l'app e rende lo store raggiungibile da
  qualsiasi componente.

## Cosa verificare

1. L'app funziona come prima (ricerca e dettaglio).
2. Con l'estensione Redux DevTools installata nel browser, la scheda Redux
   mostra lo stato `{ watchlist: { items: [] } }`.
3. Nella console del browser non ci sono errori: se manca il `Provider`,
   React Redux si lamenta con "could not find react-redux context value".
