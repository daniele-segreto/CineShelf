# CineShelf - stadio 1: il progetto ripulito

Progetto React creato con Vite e ripulito dal template di esempio. È il punto
di partenza dell'app CineShelf che cresce lezione dopo lezione.

## Come si crea da zero (facoltativo)

Questo progetto è già pronto, ma se vuoi rifarlo da capo i comandi sono:

```bash
npm create vite@latest cineshelf -- --template react
cd cineshelf
npm install
npm run dev
```

## Prompt usato a lezione

Poi incolla questo testo nel coding agent (è lo stesso della lezione):

```
Questo è un progetto Vite + React appena creato. Ripulisci il template
demo: App.jsx deve mostrare solo un titolo h1 'CineShelf' e un
sottotitolo 'Il tuo catalogo personale di film'; rimuovi i file di
esempio non più usati (logo, asset), lascia un CSS minimo con tema
scuro, imposta il titolo della pagina e lang='it' in index.html. Poi
spiegami a cosa serve ogni file rimasto. Non aggiungere librerie.
```

## Come si avvia

```bash
npm install
npm run dev
```

Apri l'indirizzo stampato in console (di norma http://localhost:5173).

## Cosa contiene

- `index.html`: la pagina unica dell'app, con il `<div id="root">` in cui React disegna tutto.
- `src/main.jsx`: il punto di ingresso, monta il componente `App` dentro `#root`.
- `src/App.jsx`: il primo componente, per ora solo titolo e sottotitolo.
- `src/index.css` e `src/App.css`: stile di base (tema scuro).
- `vite.config.js`: configurazione di Vite con il plugin React.

## Cosa verificare

1. `npm run dev` parte senza errori e la pagina mostra "CineShelf".
2. Modificando il testo in `App.jsx` la pagina si aggiorna da sola (hot reload).
3. Nella cartella `src/` non ci sono più i file di esempio del template.
