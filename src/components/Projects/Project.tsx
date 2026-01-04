import Image from "next/image";
import styles from "./Project.module.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectProps {
    title: string;
    text: string;
    image: string;
    githubUrl?: string;
    appUrl?: string;
}

export default function Project({
    title,
    text,
    image,
    githubUrl,
    appUrl,
}: ProjectProps) {
    return (
        <li className={styles.project}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={`Imagem do projeto ${title}`}
                    width={500} height={500}
                />
            </div>

            <h3>{title}</h3>
            <p>{text}</p>

            <div className={styles.actions}>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    Repositório <FiGithub />
                </a>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                    Aplicação <FiExternalLink />
                </a>
            </div>
        </li>
    );
}
