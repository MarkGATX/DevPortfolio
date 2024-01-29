'use client'
import styles from './page.module.scss'
import ProjectsContainer from './components/ProjectsContainer/projectsContainer'
import ProjectsContainerDesktop from './components/ProjectsContainerDesktop/projectsContainerDesktop';
import { useState, useLayoutEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Update value when window is resized

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className='main'>
      <div className={styles.aboutMeContainer}>
        <p>Creative Front-end Developer creating great sites and drinking lots of coffee.</p>
      </div>
      {isMobile ? 
      <ProjectsContainer />
    : <ProjectsContainerDesktop />
    }
   
      
      
    </main>
  )
}
