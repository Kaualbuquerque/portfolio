import { useEffect } from "react";
import SkillItem from "./SkillItem"
import styles from "./Skills.module.scss"
import { skills } from "./skills.data"
import { HiCode as Icon } from "react-icons/hi"

export default function Skills() {

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.show);
                    } else {
                        entry.target.classList.remove(styles.show);
                    }
                });
            },
            {
                threshold: .2,
                rootMargin: "0px 0px -200px 0px"
            }
        );

        const blocks = document.querySelectorAll<HTMLElement>(`.${styles.skills}`);
        blocks.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.skills}>
            <div>
                <Icon aria-hidden="true" className={styles.icon} />
                <h3>Linguagens e Tecnologias</h3>
            </div>
            <ul>
                {skills.map((skill) => (
                    <SkillItem name={skill.name} Icon={skill.Icon} key={skill.name} />
                ))}
            </ul>
        </section>
    )
}