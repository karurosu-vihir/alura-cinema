import Banner from "components/Banner"
import styles from "../../pages/Inicio/index.module.css"
import "./Player.module.css"
import Titulo from "components/Titulo"
import { useParams } from "react-router-dom"
import Page404 from "pages/Page404"
import { useEffect, useState } from "react"

const Player = () => {
    const [carta, setcarta] = useState([]);
    const id = useParams()

    useEffect(() => {
        const getdata = async () => {
            const res = await fetch(`https://my-json-server.typicode.com/karurosu-vihir/alura-cinema-api/Videos?id=${id.id}`)
            const data = await res.json();
            setcarta(...data);
            console.log(data)
        }
        getdata()
    }, [id.id])
    // const carta = cartas.find(carta=> carta.id === Number(id.id))
    if (!carta) return <Page404 />
    return <>
        <Banner img="player" color="#58B9AE" />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe width="100%" height="100%" src={carta.link} title={carta.titulo} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    </>
}

export default Player