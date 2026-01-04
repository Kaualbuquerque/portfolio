import Project from "./Project"
import styles from "./Projects.module.scss"
import { projects } from "@/data/projects.data"

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Projetos</h2>
            <ul>
            {projects.map((project) => (
                    <Project 
                    title={project.title} 
                    text={project.text} 
                    image={project.image} 
                    key={project.title} 
                    githubUrl={project.githubUrl}
                    appUrl={project.appUrl}/>
                ))}
            </ul>
        </section>
    )
}