import styles from "./Cards.module.css"
import favorito from "./icon_fav.png"
import notfavorito from "./icon_notfav.png"
import { useFavoritoContext } from "Contexto/Favoritos"
import { Link } from "react-router-dom"

const Cards = ({ id, capa, titulo }) => {
    const { fav, agregarFavorito } = useFavoritoContext()
    const isFavorito = fav.some(f => f.id === id)
    const icon = isFavorito ? favorito : notfavorito;

    return (
        <div className={styles.container}>
            <Link to={`/${id}`} className={styles.Link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icon} alt="icono favorito" onClick={() => {
                agregarFavorito({ id, capa, titulo })
            }} />
        </div>
    )
}

export default Cards