import styles from "./About.module.scss"

export default function About() {
    return (
        <section className={styles.about} aria-label="Sobre">
            <section className={styles.block}>
                <h2 className={styles.title}><span>Kauã Albuquerque</span></h2>
                <p className={styles.text}>
                    Desenvolvo soluções e aplicações digitais focadas na experiência do usuário, unindo funcionalidade e estética para transformar ideias em produtos reais e eficientes.
                </p>
                <p className={styles.text}>
                    Meu objetivo é criar interfaces intuitivas, agradáveis e alinhadas às necessidades de quem as utiliza, garantindo que cada projeto una propósito, design e desempenho em uma experiência digital completa.
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.title}>Transformando ideias em experiências</h2>
                <p className={styles.text}>
                    Cada projeto começa com uma visão e se concretiza por meio de tecnologia bem aplicada, decisões conscientes e foco no usuário.Transformar ideias em experiências é mais do que escrever código: é entender problemas, desenhar soluções e entregar valor real às pessoas.
                </p>
                <p className={styles.text}>
                    Atuo no desenvolvimento de soluções modernas e eficientes, unindo técnica e design para criar experiências digitais completas, funcionais e intuitivas. O objetivo não é apenas fazer algo funcionar, mas fazer sentido, ser útil e gerar impacto positivo.
                </p>
                <p className={styles.text}>
                    Fora do desenvolvimento direto, invisto constantemente em aprendizado, exploração de novas tecnologias e evolução de projetos já existentes. Esse processo contínuo de aprimoramento é o que permite transformar boas ideias em experiências consistentes, relevantes e cada vez melhores.
                </p>
            </section>

            <section className={styles.block}>
                <h2 className={styles.title}>Stack e práticas de desenvolvimento</h2>
                <p className={styles.text}>
                    No meu dia a dia como desenvolvedor, construo interfaces bem estruturadas, responsivas e focadas na experiência do usuário, sempre buscando código limpo, organizado e fácil de manter. Gosto de trabalhar com aplicações dinâmicas, pensando em reutilização, desempenho e clareza na estrutura.
                </p>
                <p className={styles.text}>
                    Também atuo no desenvolvimento de soluções robustas do lado do servidor, lidando com regras de negócio, integração entre sistemas e decisões de arquitetura. No processo, aplico práticas ágeis no trabalho em equipe e utilizo uma base sólida de fundamentos de ciência da computação para tomar decisões técnicas mais conscientes e evoluir constantemente como profissional.
                </p>
            </section>
        </section>
    )
}