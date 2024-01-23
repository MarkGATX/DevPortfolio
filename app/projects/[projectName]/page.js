import styles from '../projects.module.scss'
import { projectData } from '../../utils/projectData'
import TechStack from '@/app/components/techStack/TechStack'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ImageContainers from '@/app/components/ImageContainers/ImageContainers'


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
            <div className={styles.linkButtons}>
                {project?.livePath ?
                    <Link href={project?.livePath}  target='_blank'>
                        <button>Live Site</button>
                    </Link>
                    :
                    null
                }
                {project?.gitPath ?
                    <Link href={project?.gitPath}  target='_blank'>
                        <button>Github Repo</button>
                    </Link>
                    :
                    null
                }
            </div>
            <div className={styles.projectTech}>
                <p>Techstack</p>
                <div className={`${styles.techStack} ${styles.alignLeft}`}>
                <TechStack tech={project.tech} />
                </div>
            </div>
            
            <section className={styles.projectDetails} >
                <div className={styles.heroImage}>
                    <Image src={project.imgs[0]} fill={true} style={{ objectFit: 'cover', borderRadius:'10px', objectPosition:'top 0% left 0%' }} alt={`${project.title} hero image`}/>
                </div>
                <div className={styles.projectDescription}>
                    <h3>Description</h3>
                    <article>{project.longDesc}</article>
                </div>
                <section className={styles.projectImages}>
                    <ImageContainers images={project.imgs} title={project.title}/>
                    {/* {project.imgs.map((img) => {
                     return   (
                     <div className={styles.imageContainers}>
                            <Image src={img} fill={true} style={{ objectFit: 'contain' }} alt={`${project.title} screenshots`} className={`${zoomedImage === img ? 'zoomed' : ''}`} onClick={(event) => handleImageClick(event, img)}></Image>
                        </div>
                     )
                     })} */}
                </section>
            </section>
        </main>
    )
}