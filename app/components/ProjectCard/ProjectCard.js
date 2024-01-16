import Link from 'next/link'
import styles from './projectCard.module.scss'
import Image from 'next/image';
import { forwardRef } from 'react';


// export default function ProjectCard({ projectData }) {
const ProjectCard = forwardRef(({projectData}, ref) => {

    const { title, displayClass, type, livePath, gitPath, desc, longDesc, role, imgs, tech, link } = projectData
    return (
        <Link href={link} className={styles.projectCardLink} ref={ref}>
            <div className={styles.projectCardContainer}>
                <div className={styles.projectCardTitle}>
                    <h2>{title}</h2>
                    <sub>{desc}</sub>
                </div>
                <div className={styles.projectCardClip}>
                    <div className={`${styles.projectCardBackground} ${styles[displayClass]}`}></div>
                </div>

            </div>
            <div className={styles.projectCardTech}>
                {tech?.map((techVal, index) => {
                    return <Image src={`/images/tech/${techVal}.webp`} width={24} height={24} key={index} className={styles.techImage} alt={`${techVal} icon`} title={techVal}></Image>
                }
                )}
            </div>
        </Link>

    )
}
)

export default ProjectCard