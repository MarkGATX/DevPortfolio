'use client'

import styles from './projectContainerDesktop.module.scss'
import { projectData } from '../../utils/projectData'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Suspense, useLayoutEffect, useRef } from 'react';
// import ProjectCard from '../ProjectCard/ProjectCard';
// import ProjectCardSuspense from '../ProjectCard/ProjectCardSuspense';
import ProjectCardDesk from '../ProjectCardDesk/ProjectCardDesk';
import { useGSAP } from '@gsap/react';


export default function ProjectsContainerDesktop() {
    gsap.registerPlugin(ScrollTrigger)
    const projectTitleRef = useRef();
    const projectRefs = useRef([]);
    const scrollerRef = useRef();
    const scrollUpButtonRef = useRef();
    const scrollDownButtonRef = useRef();
    const cardAnimationContainerRef = useRef();

    useLayoutEffect(() => {
              
        const projectsContainerOffset = projectTitleRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty("--projectsContainerOffset", (projectsContainerOffset.top + 200) + "px");
     
    }
    )

    useGSAP(() => {
        // let animatedProjectsDesk = gsap.utils.toArray('[data-type="projectCard"]');
        const scroller = document.querySelector("#projectsScroller");
        const animatedProjectsDesk = document.querySelectorAll('[data-type="projectCard"]')
        console.log(animatedProjectsDesk)

        animatedProjectsDesk.forEach((project) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    toggleActions: 'play none none reverse',
                    scroller: '#projectsScroller',
                    scrub: .5,
                    markers:true,
                    horizontal:true,

                },
            });
            tl.to(project, {
                keyframes: {
                    "0%": { scale: .8, autoAlpha: 0, },
                    "30%": { scale: 1, autoAlpha: 1, ease: 'power3.in' },
                    "90%": { scale: 1, autoAlpha: 1, ease: 'power1.in'}, // finetune with individual eases
                    "100%": { scale: .8, autoAlpha: 0,  },
                },
                ease: 'power1.out'
            });
        })
        }, [])
    


    return (
        <>
            <div className={styles.projectsTitleDesk} ref={projectTitleRef}>
                <h1>My Projects</h1>
            </div>

                <div className={styles.projectsContainer}>
                    <div ref={scrollerRef} id='projectsScroller' className={styles.projectsScroller}>
                        <div className={styles.projectCardSpacer}></div>
                        <div ref={cardAnimationContainerRef} className={styles.projectsAnimateWrapper}>
                            {projectData?.map((project, key) =>
                                // <Suspense fallback={<ProjectCardSuspense />} key={project.displayClass}>
                                <ProjectCardDesk projectData={project} key={project.displayClass} />
                                // </Suspense>
                            )
                            }
                        </div>
                    </div>
                </div>

        </>
    )
}
