import AboutMeGallery from '../components/AboutMeGallery/AboutMeGallery'
import styles from './aboutMe.module.scss'

export default function AboutMe() {
    return (
        <main>
            <section className={styles.aboutMeTitle}>
            <h1> About Me...</h1>
            </section>
            <section className={styles.aboutMeContainer}>
                
                    <div className={styles.aboutMeText}>
                        <p> I'm a Front-End and Full-Stack Developer who constantly pushes the boundaries of what I can achieve. When I decide on a goal, I figure out what I need to learn to make it succeed. Then I go after it.</p>
                        <p>Whether diving into tutorials on the latest web framework or studying cinematography to direct a film, it always feels fantastic to look back at the finished project and see how much I learned. While I am definitely my own worst critic, I accomplished something new and exciting at the end of the day.</p>
                        <p>With all these incredible experiences, I'm most proud of being a part of my family. My rock-star wife is always there for the ride, and my son is an absolute joy. Walking him home from school is the best part of my day, and I can't wait to see the person he grows into.</p>
                        <p>I love good food, board games, Star Trek, Legos, Star Wars, actual stars, movies, and more than I can list here. I always say, "I'll try anything twice," that's paid off for me over the years.</p>
                        <p>Now, I'm ready for my next challenge and can't wait to see where it takes me. Reach out and say hello!</p>
                    </div>
                    <div className={styles.galleryContainer}>
                        <AboutMeGallery />
                    </div>
            </section >
        </main>
    )
}