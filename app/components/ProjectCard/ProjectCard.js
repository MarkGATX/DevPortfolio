import Link from 'next/link'
import styles from './projectCard.module.scss'
import Image from 'next/image';


export default function ProjectCard({ projectData }) {


    const { title, displayClass, type, livePath, gitPath, desc, longDesc, role, imgs, tech, link } = projectData
    console.log(tech)
    return (
        <Link href={link} className={styles.projectCardLink}>
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
                    console.log(techVal)
                    return <Image src={`/images/tech/${techVal}.webp`} width={24} height={24} key={index} className={styles.techImage}></Image>
                }
                )}
            </div>
        </Link>

    )
}