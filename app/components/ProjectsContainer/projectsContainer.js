'use client'

import styles from './projectsContainer.module.scss'
import { projectData } from '../../utils/projectData'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Suspense, useLayoutEffect, useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCardSuspense from '../ProjectCard/ProjectCardSuspense';


// import { ScrollTrigger } from 'gsap/ScrollTrigger';




export default function ProjectsContainer() {
    // gsap.registerPlugin(ScrollTrigger)
    const projectTitleRef = useRef();
    const projectRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el)
        }
    }


    useLayoutEffect(() => {

        const projectsContainerOffset = projectTitleRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty("--projectsContainerOffset", (projectsContainerOffset.top + 100) + "px");

    }
    )

    // useGSAP (() => {
    //     console.log(projectRefs)
    //     projectRefs.current.forEach((el) => {

    //         gsap.to(el, {


    //             scrollTrigger: {
    //                 trigger: el,
    //                 markers:true,
    //                 // scroller: '.projectsScroller',
    //             }
    //         });

    //     });
    //       
    // })



    return (
        <>
            <div className={styles.projectsTitle} ref={projectTitleRef}>
                <h1>My Projects...</h1>
            </div>

            <div className={styles.projectsContainer}>
                <div className={styles.topFade}></div>
                <div className={styles.projectsScroller}>
                    <div className={styles.projectCardSpacer}></div>
                    {projectData?.map((project, key) =>
                        <Suspense fallback={<ProjectCardSuspense />}>
                            <ProjectCard projectData={project} key={project.displayClass} ref={addToRefs(key)} />
                        </Suspense>
                    )
                    }
                    <div className={styles.projectCardSpacer}></div>
                </div>
                <div className={styles.bottomFade}></div>
            </div>
        </>
    )
}