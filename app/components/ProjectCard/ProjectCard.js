import Link from 'next/link'
import styles from './projectCard.module.scss'
import TechStack from '../techStack/TechStack';


export default function ProjectCard({ projectData }) {

    const { title, displayClass, desc, tech, link } = projectData
    return (
        <Link href={`/projects/${link}`} className={styles.projectCardLink}>
            <div data-type="projectCard" className={styles.projectCard}>
                <section className={styles.projectCardContainer}>
                    <div className={styles.projectCardTitle}>
                        <h2>{title}</h2>
                        <sub>{desc}</sub>
                    </div>
                    <div className={styles.projectCardClip}>
                        <div className={`${styles.projectCardBackground} ${styles[displayClass]}`}></div>
                    </div>

                </section>
                <section className={styles.projectCardTech}>
                    <TechStack tech={tech} />
                </section>
            </div>
        </Link>

    )
}

