'use client'

import styles from './projectsContainer.module.scss'
import { projectData } from '../../utils/projectData'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import ProjectCardSuspense from '../ProjectCard/ProjectCardSuspense';

export default function ProjectsContainer() {
    // gsap.registerPlugin(ScrollTrigger)
    const projectTitleRef = useRef();
    const projectRefs = useRef([]);
    const scrollerRef = useRef();
    const scrollUpButtonRef = useRef();
    const scrollDownButtonRef = useRef();
    const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);


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



    const handleScrollDown = () => {
        console.log('click');
        const scroll = scrollerRef.current;
        scroll.scrollTo({
            top: scroll.scrollTop + 200, // Scroll down 100 pixels from the current position
            behavior: 'smooth'
        });
    };

    const handleScrollUp = () => {
        console.log('click');
        const scroll = scrollerRef.current
        scroll.scrollTo({
            top: scroll.scrollTop - 200, // Scroll down 100 pixels from the current position
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className={styles.projectsTitle} ref={projectTitleRef}>
                <h1>My Projects...</h1>
            </div>
            <div className={styles.projectsAndScroller}>
                <div className={styles.projectsContainer}>
                    <div className={styles.topFade}></div>
                    <div ref={scrollerRef} className={styles.projectsScroller}>
                        <div className={styles.projectCardSpacer}></div>
                        {projectData?.map((project, key) =>
                            <Suspense fallback={<ProjectCardSuspense />} key={project.displayClass}>
                                <ProjectCard projectData={project} key={project.displayClass} ref={addToRefs(key)} />
                            </Suspense>
                        )
                        }
                        <div className={styles.projectCardSpacer}></div>
                    </div>
                    <div className={styles.bottomFade}></div>
                </div>
                <div className={styles.scrollerButtons}>
                    <svg onClick={handleScrollUp} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 48 48" >
                        <g>
                            <circle cx="24" cy="24" r="21.5" />
                        </g>
                        <polyline points="34.8,32 24,10.6 13.2,32 " />
                    </svg>
                    <svg onMouseDown={handleScrollDown} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 48 48" >
                        <g>
                            <circle cx="24" cy="24" r="21.5" />
                        </g>
                        <polyline points="34.8,14.9 24,36.3 13.2,14.9 " />
                    </svg>

                </div>
            </div>
        </>
    )
}