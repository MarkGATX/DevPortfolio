'use client'

import styles from './projectContainerDesktop.module.scss'
import { projectData } from '../../utils/projectData'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Suspense, useLayoutEffect, useRef, useState } from 'react';
// import ProjectCard from '../ProjectCard/ProjectCard';
// import ProjectCardSuspense from '../ProjectCard/ProjectCardSuspense';
import ProjectCardDesk from '../ProjectCardDesk/ProjectCardDesk';
import { useGSAP } from '@gsap/react';


export default function ProjectsContainerDesktop() {
    gsap.registerPlugin(ScrollTrigger)
    const projectTitleRef = useRef();
    const projectRefs = useRef([]);
    const scrollerRef = useRef();
    const scrollLeftButtonRef = useRef();
    const scrollRightButtonRef = useRef();
    const cardAnimationContainerRef = useRef();
    const [showScrollButtons, setShowScrollButtons] = useState(false);

    useLayoutEffect(() => {

        const projectsContainerOffset = projectTitleRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty("--projectsContainerOffset", (projectsContainerOffset.top + 200) + "px");
        setShowScrollButtons(true)
        // scrollLeftButtonRef.current.addEventListener("pointerDown", handleScrollLeft);
        // scrollRightButtonRef.current.addEventListener("pointerDown", handleScrollRight);
        // scrollRightButtonRef.current.addEventListener("pointerUp", handlePointerUp);
        // scrollRightButtonRef.current.addEventListener("pointerUp", handlePointerUp);

        // return () => {
        //     scrollLeftButtonRef.current.removeEventListener("pointerUp", handlePointerUp);
        //     scrollRightButtonRef.current.removeEventListener("pointerUp", handlePointerUp);
        //     scrollLeftButtonRef.current.removeEventListener("pointerDown", handleScrollLeft);
        // scrollRightButtonRef.current.removeEventListener("pointerDown", handleScrollRight);
        // }
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
                    horizontal: true,

                },
            });
            tl.to(project, {
                keyframes: {
                    "0%": { scale: .8, autoAlpha: 0, },
                    "25%": { scale: 1, autoAlpha: 1, ease: 'power3.inOut' },
                    "70%": { scale: 1, autoAlpha: 1, ease: 'power3.inOut' }, // finetune with individual eases
                    "100%": { scale: .8, autoAlpha: 0, },
                },
                // ease: 'power1.out'
            });
        })
    }, [])

    let scrollInterval;

    const handleScrollLeft = () => {
        console.log('click')
        const scroll = scrollerRef.current;
        scrollInterval = setInterval(() => {
            scroll.scrollLeft += 10; // Scroll left 10 pixels from the current position
        }, 10);
    }

    const handleScrollRight = () => {
        const scroll = scrollerRef.current
        scrollInterval = setInterval(() => {
            scroll.scrollLeft -= 10; // Scroll right 10 pixels from the current position
        }, 10);
    };

    const handlePointerUp = () => {
        clearInterval(scrollInterval);
    }


    return (
        <>
            <div className={styles.projectsTitleDesk} ref={projectTitleRef}>
                <h1>My Projects</h1>
            </div>

            <div className={styles.projectsContainer}>
                <div ref={scrollerRef} id='projectsScroller' className={styles.projectsScroller}>
                    <div className={styles.projectCardSpacer}></div>
                    <div ref={cardAnimationContainerRef} className={styles.projectsAnimateWrapper}>
                        <div className={styles.projectCardSpacer}></div>
                        {projectData?.map((project, key) =>
                            // <Suspense fallback={<ProjectCardSuspense />} key={project.displayClass}>
                            <ProjectCardDesk projectData={project} key={project.displayClass} />
                            // </Suspense>
                        )
                        }
                    </div>
                </div>
                {showScrollButtons ?
                    <div className={styles.scrollerButtons}>
                        <svg ref={scrollLeftButtonRef} onPointerDown={handleScrollLeft} onPointerUp={handlePointerUp} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 48 48" >
                            <g>
                                <circle cx="24" cy="24" r="21.5" />
                            </g>
                            <polyline points="32.8,13.2 11.4,24 32.8,34.8 " />
                        </svg>
                        <svg ref={scrollRightButtonRef} onPointerDown={handleScrollRight} onPointerUp={handlePointerUp} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 48 48" >
                            <g>
                                <circle cx="24" cy="24" r="21.5" />
                            </g>
                            <polyline points="14.6,13.2 36,24 14.6,34.8 " />
                        </svg>

                    </div>
                    :
                    null
                }
            </div>

        </>
    )
}
