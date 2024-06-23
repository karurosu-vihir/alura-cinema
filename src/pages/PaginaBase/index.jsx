import { FavoritosProvider } from "Contexto/Favoritos"
import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container"
import { Outlet } from "react-router-dom"
import Pie from "components/Pie"


const PaginaBase = () => {
    return (
        <main>
            <Cabecera />
            <Container>
            <FavoritosProvider>
                    <Outlet />
            </FavoritosProvider>
            </Container>
            <Pie />
        </main>
    )
}

export default PaginaBase