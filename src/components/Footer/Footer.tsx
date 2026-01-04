"use client"

import styles from "./Footer.module.scss"

import { SiGithub as Github, SiLinkedin as Linkedin } from "react-icons/si"
import { HiDownload as Download, HiMail as Email } from "react-icons/hi"
import { useState } from "react"
import { FiCheck, FiCopy } from "react-icons/fi"
export default function Footer() {

    const [copied, setCopied] = useState(false);
    const email = "kaualbuquerque44@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}> Contato</h2>
            <div>
                <p className={styles.text}>Gostou do meu trabalho? Fique à vontade para entrar em contato através do meu e-mail. Você também pode explorar meus projetos no GitHub ou me acompanhar pelo LinkedIn. Se precisar de mais detalhes sobre minha trajetória, clique no botão abaixo para baixar uma cópia do meu CV em PDF.</p>

                <ul>
                    <li>
                        <a onClick={handleCopy}>
                            <span>{copied ? "Copiado" : email}</span>
                            {copied ? <FiCheck className={styles.icon} /> : <Email className={styles.icon} />}
                        </a>
                    </li>
                    <li><a href="https://github.com/Kaualbuquerque" target="_blank">Github <Github className={styles.icon} /></a></li>
                    <li><a href="https://www.linkedin.com/in/kau%C3%A3-albuquerque-4236a1247/" target="_blank">Linkedin <Linkedin className={styles.icon} /></a></li>
                    <li><a href="/docs/Kaua-Albuquerque.pdf" download={"Curriculo_Kauã_Albuquerque.pdf"}>CV <Download className={styles.icon} /></a></li>
                </ul>
            </div>
        </footer>
    )
}