import styles from "./Hero.module.scss"

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.hero_title}>
                <span className={styles.hero_highlight}>Hey, I’m </span>
                <br />
                Kauã Albuquerque
            </h1>
        </section>
    )
}