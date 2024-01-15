import Image from 'next/image'
import styles from './page.module.css'
import ProjectsContainer from './components/ProjectsContainer/projectsContainer'


export default function Home() {


  return (
    <main className='main'>
      <div className={styles.aboutMeContainer}>
        <p>Creative Front-end Developer creating great sites and drinking lots of coffee.</p>
      </div>
    <ProjectsContainer/>
      
      
    </main>
  )
}
