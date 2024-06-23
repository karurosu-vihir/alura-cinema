import { useContext, createContext, useState } from "react";

const favoritosContext = createContext();

favoritosContext.displayName = "Favoritos"

const FavoritosProvider = ({ children }) => {
    const [fav, setfav] = useState([]);
    return (<favoritosContext.Provider value={{ fav, setfav }}>
        {children}
    </favoritosContext.Provider>
    )
}

const useFavoritoContext = () => {
    const { fav, setfav } = useContext(favoritosContext)

    const agregarFavorito = (nuevo) => {
        const favrepetido = fav.some((item) => item.id === nuevo.id)
        let nuevalista = [...fav]
        if (!favrepetido) {
            nuevalista.push(nuevo)
            return setfav(nuevalista)
        }

        nuevalista = fav.filter(item => item.id !== nuevo.id)

        return setfav(nuevalista)
    }
    return { fav, agregarFavorito }
}

export {useFavoritoContext, FavoritosProvider, favoritosContext}; 