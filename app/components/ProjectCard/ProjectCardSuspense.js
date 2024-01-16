import styles from './projectCard.module.scss'

export default function ProjectCardSuspense () {
    reteurn (
        <Link href='#' className={styles.projectCardSuspense}>
            <div className={styles.projectCardContainerSuspense}>
                <h2>Loading...</h2>
               

            </div>
            <div className={styles.projectCardTech}>
                
            </div>
        </Link>
    )
}