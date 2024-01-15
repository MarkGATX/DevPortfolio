'use client'

import styles from './projectsContainer.module.scss'
import {projectData} from '../../utils/projectData'
import ProjectCard from '../ProjectCard/ProjectCard'
import { useLayoutEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function ProjectsContainer() {
    const projectTitleRef=useRef();
    const projectRefs = useRef([]);


    useLayoutEffect (() => {      
    const projectsContainerOffset =  projectTitleRef.current.getBoundingClientRect();
    document.documentElement.style.setProperty("--projectsContainerOffset", (projectsContainerOffset.top +100) + "px");
    
    }
    )
    
    useGSAP (() => {
        projectData.forEach((project) => {
    
        let tl =gsap.timeline({
            scrollTrigger: {
                scrollTrigger:projectRefs.current,
                scroller:'.projectsScroller',
                markers:true,
                scrub: true,
            },
            
            
        })
            tl.fromTo(projectRefs.current[project.displayClass], {opacity:0}, {opacity:1})
    })

})


    
    return (
        <>
            <div className={styles.projectsTitle} ref={projectTitleRef}>
                <h1>My Projects...</h1>
            </div>

            <div className={styles.projectsContainer}>
                <div className={styles.topFade}></div>
                <div className={styles.projectsScroller}>
                    <div className={styles.projectCardSpacer}></div>
                    {projectData?.map((project) =>
                        <ProjectCard projectData={project} key={project.displayClass} ref={el => projectRefs.current[project.displayClass]=el}/>
                    )
                    }
                    <div className={styles.projectCardSpacer}></div>
                </div>
                <div className={styles.bottomFade}></div>
            </div>
        </>
    )
}