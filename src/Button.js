import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import FavoritesContext from "./FavoritesList";

const Button = ({ text, item }) => {
    const [, setFavorites] = useContext(FavoritesContext);

    var saveFavorite = () => {
        var favorites = JSON.parse(localStorage.getItem("favorites"));

        if (!favorites) {
            favorites = [];
        }

        favorites.push(item);

        localStorage.setItem("favorites", JSON.stringify(favorites));

        setFavorites(favorites);
    }

    return <button onClick={() => saveFavorite()}>{text} <BsArrowRight /></button>;
}

export default Button;
