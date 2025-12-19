import { IconType } from "react-icons"
import styles from "./SkillItem.module.scss"

type SkillProps = {
    name: string
    Icon?: IconType
}

export default function SkillItem({ name, Icon }: SkillProps) {
    return (
        <li className={styles.skill}>
            {Icon && <Icon aria-hidden="true" className={styles.icon} />}
            <p className={styles.name}>{name}</p>
        </li>
    )
}