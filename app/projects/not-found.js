import styles from './projects.module.scss'
import { projectData } from '../utils/projectData'
import Link from 'next/link'
import Image from 'next/image'


export default function NotFound() {

    return (
        <main>
            <div className={styles.projectTitle}>
                <h1>Sorry, we can't find that project.</h1>
                <p>Maybe you're looking for one of these...</p>
            </div>
            <div className={styles.smallProjectContainer}>
                {projectData.map((project) => {
                    return (
                        <Link href={`/projects/${project.link}`} className={styles.smallProjectCard} key={project.title}>

                            <sub className={styles.smallProjectCardTitle}>{project.title}</sub>
                            <div className={styles.imgClip}>
                                <Image src={project.imgs[0].src} fill='true' style={{ objectFit: 'cover' }} alt={`${project.title} thumbnail`}></Image>
                            </div>
                           
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}