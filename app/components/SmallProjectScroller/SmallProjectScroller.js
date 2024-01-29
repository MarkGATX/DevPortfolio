import styles from './smallProjectScroller.module.scss'
import { projectData } from '../../utils/projectData'
import Link from 'next/link'
import Image from 'next/image'


export default function SmallProjectScroller() {

    return (
        <div className={styles.smallScrollerContainer}>
            <div className={styles.smallScrollerTitle}>
                <h5>More projects...</h5>
            </div>
                <div className={styles.smallScrollerProjects}>

                    {projectData.map((project) => {
                        return (
                            <Link href={`/projects/${project.link}`} className={styles.smallProjectCard} key={project.title}>

                                <sub className={styles.smallProjectCardTitle}>{project.title.length > 10 ? project.title.substring(0, 8) + `...` : project.title}</sub>
                                <div className={styles.imgClip}>
                                    <Image src={project.imgs[0].src} fill='true' style={{ objectFit: 'cover' }} alt={`${project.title} thumbnail`}></Image>
                                </div>

                            </Link>
                        )
                    })}
                </div>
            </div>
    )
}