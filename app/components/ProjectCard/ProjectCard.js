import Link from 'next/link'
import styles from './projectCard.module.scss'
import Image from 'next/image';
import { forwardRef } from 'react';
import TechStack from '../techStack/TechStack';


// export default function ProjectCard({ projectData }) {
const ProjectCard = forwardRef(({projectData}, ref) => {

    const { title, displayClass, desc, tech, link } = projectData
    return (
        <Link href={`/projects/${link}`} className={styles.projectCardLink} ref={ref}>
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
                <TechStack tech={tech}/>
            </section>
        </Link>

    )
}
)

export default ProjectCard