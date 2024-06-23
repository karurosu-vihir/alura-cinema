import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Cards from "components/Cards";
import styles from "./index.module.css"
import { useEffect, useState } from "react";

function Inicio() {
  const [cartas, setcartas] = useState([])
  useEffect(() => {
    const getcartas = async function(){
    const respones = await fetch("https://my-json-server.typicode.com/karurosu-vihir/alura-cinema-api/Videos");
    const res =  await respones.json();
    setcartas(res)
  }
  getcartas();
  }, [])
  return (
    <>
      <Banner img="home" color="#0000FF"/>
      <Titulo>
          <h1>Un lugar para guardar sus videos favoritos</h1>
      </Titulo>
      <section className={styles.container}>
      {
      cartas.map((carta) => {
        return <Cards {...carta} key={carta.id}/>
      })
      }
      </section>
    </>
  );
}

export default Inicio;



