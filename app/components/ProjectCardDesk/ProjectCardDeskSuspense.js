import styles from './projectCard.module.scss'

export default function ProjectCardSuspense () {
    return (
        <div className={styles.projectCardSuspense}>
            <div className={styles.projectCardContainerSuspense}>
                <h2>Loading...</h2>
               

            </div>
            <div className={styles.projectCardTech}>
                
            </div>
        </div>
    )
}