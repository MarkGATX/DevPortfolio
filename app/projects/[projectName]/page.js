import styles from '../projects.module.scss'
import { projectData } from '../../utils/projectData'
import TechStack from '@/app/components/techStack/TechStack'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ImageContainers from '@/app/components/ImageContainers/ImageContainers'
import { Gallery } from 'next-gallery'
import ProjectGallery from '@/app/components/ProjectGallery/ProjectGallery'


export async function generateMetadata({ params }) {
    const capProjectName = params.projectName.charAt(0).toUpperCase() + params.projectName.slice(1)
    return {
        title: `${capProjectName} Project`,
    }
}
const widths = [500, 1000, 1600]
const ratios = [2.2, 4, 6, 8]

export default function ProjectName({ params }) {


    const project = projectData.find(project => project.link === params.projectName)
    if (!project) {
        notFound();
    }
    console.log(project.imgs)
    // const imageSources = project.imgs.map(img => {

    //     return {
    //         src: img.src,
    //         aspect_ratio: img.ratio,
    //         alt: img.alt // Default alt text, change as needed

    //     }
    // });
    // console.log('image sources'+imageSources)

    return (
        <main>
            <div className={styles.projectTitle}>
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
            </div>
            <div className={styles.linkButtons}>
                {project?.livePath ?
                    <Link href={project?.livePath} target='_blank'>
                        <button>Live Site</button>
                    </Link>
                    :
                    null
                }
                {project?.gitPath ?
                    <Link href={project?.gitPath} target='_blank'>
                        <button>Github Repo</button>
                    </Link>
                    :
                    null
                }
            </div>


            <section className={styles.projectDetails} >
                <div className={styles.heroImageContainer}>
                    <Image src={project.imgs[0].src} fill={true} className={styles.heroImage} style={{ objectFit: 'cover', borderRadius: '10px' }} alt={`${project.title} hero image`} sizes="90vw" />
                </div>

                <div className={styles.projectDescription}>
                    <h3>Description</h3>
                    <article>{project.longDesc}</article>
                </div>
                <div className={styles.projectTech}>
                    <p>Techstack</p>
                    <div className={`${styles.techStack} ${styles.alignLeft}`}>
                        <TechStack tech={project.tech} />
                    </div>
                </div>
                <section className={styles.projectImages}>
                    {/* <ImageContainers images={project.imgs} title={project.title}/> */}
                    <Gallery widths={widths} aspect_ratio={ratios} images={project.imgs} lastRowBehavior='preserve' gap='.5em' />
                    {/* <ProjectGallery widths={widths} ratios={ratios} images={project.imgs} /> */}
                    {/* {project.imgs.map((img) => {
                     return   (
                     <div className={styles.imageContainers}>
                            <Image src={img} fill={true} style={{ objectFit: 'contain' }} alt={`${project.title} screenshots`} className={`${zoomedImage === img ? 'zoomed' : ''}`} onClick={(event) => handleImageClick(event, img)}></Image>
                        </div>
                     )
                     })} */}
                </section>
            </section>
            <section className={styles.otherProjects}>

            </section>
        </main>
    )
}