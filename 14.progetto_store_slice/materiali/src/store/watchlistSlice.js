import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

// Uno slice = una "fetta" dello stato globale con i suoi reducer.
// createSlice genera da solo le azioni (addMovie, removeMovie) e il reducer.
const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovie(state, action) {
      const movie = action.payload
      const alreadySaved = state.items.some((item) => item.imdbID === movie.imdbID)
      if (!alreadySaved) {
        // Sembra una mutazione, ma Immer la trasforma in un nuovo stato
        state.items.push(movie)
      }
    },
    removeMovie(state, action) {
      const imdbID = action.payload
      state.items = state.items.filter((item) => item.imdbID !== imdbID)
    },
  },
})

export const { addMovie, removeMovie } = watchlistSlice.actions
export default watchlistSlice.reducer
