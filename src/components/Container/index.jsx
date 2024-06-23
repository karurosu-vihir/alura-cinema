import styles from "./Container.module.css"

const Container = ({children}) => {
    return(
        <section className={styles.Container}>
            {children}
        </section>
    )
}

export default Container