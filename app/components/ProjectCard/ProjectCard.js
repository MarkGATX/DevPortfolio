import Link from 'next/link'
import styles from './projectCard.module.scss'


export default function ProjectCard({ projectData }) {

    const { title, displayClass, type, livePath, gitPath, desc, longDesc, role, imgs, tech, link } = projectData

    return (
        <Link href={link} className={styles.projectCardLink}>
        <div className={styles.projectCardContainer}>
            <h2 className={styles.projectCardTitle}>{title}</h2>
            <div className={styles.projectCardClip}>
                <div className={`${styles.projectCardBackground} ${styles[displayClass]}`}></div>
            </div>
        </div>
        </Link>

    )
}