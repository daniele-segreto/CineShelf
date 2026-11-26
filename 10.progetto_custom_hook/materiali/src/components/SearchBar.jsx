import './SearchBar.css'

// Input "controllato": il valore mostrato e' sempre quello dello stato del
// padre (value) e ogni tasto premuto chiama onChange con il nuovo testo.
function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-bar__input"
        placeholder="Cerca un film..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
