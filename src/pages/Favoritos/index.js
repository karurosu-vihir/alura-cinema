import { useFavoritoContext } from "Contexto/Favoritos"
import style from "./Favoritos.module.css"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import Cards from "components/Cards"

const Favoritos = () => {
    const {fav} = useFavoritoContext()

    return<>
        <Banner img={"favoritos"} color={"#00BF63"}/>
        <Titulo>
            <h1>Favoritos</h1>
        </Titulo>
        <section className={style.container}>
            {
                fav.map((f)=>{
                    return <Cards {...f} key={f.id} />
                })
            }
        </section>
    </>
}

export default Favoritos