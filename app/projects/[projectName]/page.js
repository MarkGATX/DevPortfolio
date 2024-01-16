import styles from '../projects.module.scss'
import { projectData } from '../../utils/projectData'
import TechStack from '@/app/components/techStack/TechStack'
import Link from 'next/link'

export async function generateMetadata({ params }) {

    return {
        title: `${params.projectName} Project`,
    }
}

export default function Softlife({ params }) {
    const project = projectData.find(project => project.link === params.projectName)

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
        </main>
    )
}