import { configureStore } from '@reduxjs/toolkit'
import watchlistReducer from './watchlistSlice.js'

// Lo store e' unico per tutta l'app. Ogni chiave qui sotto diventa un ramo
// dello stato globale: state.watchlist e' gestito da watchlistReducer.
export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
})
