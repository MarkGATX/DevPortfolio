import styles from '../projects.module.scss'
import { projectData } from '../../utils/projectData'
import TechStack from '@/app/components/techStack/TechStack'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateMetadata({ params }) {

    return {
        title: `${params.projectName} Project`,
    }
}

export default function Softlife({ params }) {
    const project = projectData.find(project => project.link === params.projectName)
    if (!project) {
        notFound();
    }

    return (
        <main>
            <div className={styles.projectTitle}>
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
            </div>
            <div className={styles.projectTech}>
                <TechStack tech={project.tech} />
            </div>
            <div className={styles.linkButtons}>
                {project?.livePath ?
                    <Link href={project?.livePath}>
                        <button>Live Site</button>
                    </Link>
                    :
                    null
                }
                {project?.gitPath ?
                    <Link href={project?.gitPath}>
                        <button>Github Repo</button>
                    </Link>
                    :
                    null
                }
            </div>
            <section className={styles.projectDetails} >
                <div className={styles.heroImage}>
                    <Image src={project.imgs[0]} fill={true} style={{ objectFit: 'cover', borderRadius:'10px' }} alt={`${project.title} hero image`} />
                </div>
                <div className={styles.projectDescription}>
                    {project.longDesc}
                </div>
                <section className={styles.projectImages}>
                    {project.imgs.map((img) => {
                    console.log(img)
                     return   (
                     <div className={styles.imageContainers}>
                            <Image src={img} fill={true} style={{ objectFit: 'contain' }} alt={`${project.title} screenshots`} ></Image>
                        </div>
                     )
                     })}
                </section>
            </section>
        </main>
    )
}