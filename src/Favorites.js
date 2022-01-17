import React from "react";
import FavoritesContext from "./FavoritesList";

const Nums = ({favorites}) => {
    const names = favorites.reduce((acc, cur) => {
        var name = cur.name.split("-")[0];
        acc[name] = (acc[name] ?? 0) + 1;

        return acc;
    }, {});

    return <ul>{Object.keys(names).map(n => <li>{n}: {names[n]}</li>)}</ul>;
}

class Favorites extends React.Component {
    render() {
        return <div>
            <FavoritesContext.Consumer>
                {([favorites]) => favorites ? <><h3 style={{borderBottom: "1px solid black"}}>Määrät:</h3><Nums favorites={favorites} /><h3 style={{borderBottom: "1px solid black"}}>Kaikki:</h3><ul>{favorites.map(v => <li>{v.name}</li>)}</ul></> : null}
            </FavoritesContext.Consumer>
        </div>;
    }
}

export default Favorites;
