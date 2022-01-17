import { useEffect, useMemo, useState } from 'react';
import Favorites from './Favorites';
import FavoritesContext from './FavoritesList';
import { List } from './List';
import Search from './Search';
import { Theme } from './Theme';

var names = ["Pekka", "Paavo", "Jussi", "Irmeli", "Susanna"];

var items = [...Array.from({ length: 500 }).map((_, i) => ({ name: names[Math.floor(Math.random() * names.length)] + "-" + (i + 1) }))];

const loadFavorites = () => {
  const favs = JSON.parse(localStorage.getItem("favorites"));

  return favs;
}

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(loadFavorites());
  const [theme, setTheme] = useState(0);

  const onChange = (value) => {
    setSearch(value)
  }

  const themePicker = <div style={{marginBottom: "20px"}}>
    <h3>pick a theme!</h3>
    <button onClick={() => setTheme(1)}>theme 1</button>
    <button onClick={() => setTheme(2)}>theme 2</button>
  </div>;

  if (!theme) {
    return themePicker;
  }

  return (
    <div className="App" style={{ margin: "auto", width: "800px", padding: "20px" }}>
      <Theme theme={theme} />
      {themePicker}

      <Search onChange={onChange} />

      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <div style={{ display: "flex" }}>
          <List search={search} items={items} />
          <Favorites />
        </div>
      </FavoritesContext.Provider >
    </div>
  );
}

export default App;
