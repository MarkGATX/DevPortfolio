'use client'

import styles from './projectContainerDesktop.module.scss'
import { projectData } from '../../utils/projectData'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef, useState } from 'react';
// import ProjectCard from '../ProjectCard/ProjectCard';
// import ProjectCardSuspense from '../ProjectCard/ProjectCardSuspense';
import ProjectCardDesk from '../ProjectCardDesk/ProjectCardDesk';
import { useGSAP } from '@gsap/react';


export default function ProjectsContainerDesktop() {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
    const projectTitleRef = useRef();
    const projectRefs = useRef([]);
    const scrollerRef = useRef();
    const scrollLeftButtonRef = useRef();
    const scrollRightButtonRef = useRef();
    const cardAnimationContainerRef = useRef();
    const scrollerButtonDivRef = useRef();
    const [showScrollButtons, setShowScrollButtons] = useState(false);
    const [leftButtonEnd, setLeftButtonEnd] = useState(true);
    const [rightButtonEnd, setRightButtonEnd] = useState(false);

    useLayoutEffect(() => {

        const scroller = scrollerRef.current;
        scroller.addEventListener('wheel', handleWheel);

        const projectsContainerOffset = projectTitleRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty("--projectsContainerOffset", (projectsContainerOffset.top + 250) + "px");
        setShowScrollButtons(true)

        return () => {
            scroller.removeEventListener('wheel', handleWheel);
        };
    }, []
    )

    const { contextSafe } = useGSAP()

    useGSAP((context) => {
        const animatedProjectsDesk = document.querySelectorAll('[data-type="projectCard"]')
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

        console.log('context', context.data.length)
    }, [])

    let scrollInterval;

    const handleWheel = contextSafe((e) => {
        e.preventDefault();
        const deltaX = e.deltaY * 2.5
        gsap.to(scrollerRef.current, { scrollLeft: `+=${deltaX}`, ease:'power1.out', duration:.9 })
        const scroll = scrollerRef.current

        if (scroll.scrollLeft === 0) {
            setLeftButtonEnd(true)
            setRightButtonEnd(false)
        }
        if (scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 1) {
            setRightButtonEnd(true)
            setLeftButtonEnd(false)
        }
        if (scroll.scrollLeft !== 0 && scroll.scrollLeft + scroll.clientWidth < scroll.scrollWidth - 1) {
            setLeftButtonEnd(false);
            setRightButtonEnd(false)
        }
    }
    );

    const handleScrollLeft = contextSafe(() => {
        const scroll = scrollerRef.current;
        scrollInterval = setInterval(() => {
            gsap.to(scroll, { scrollLeft: '+=100' })
        }, 10);
    })

    const handleScrollRight = contextSafe(() => {
        const scroll = scrollerRef.current
        scrollInterval = setInterval(() => {
            gsap.to(scroll, { scrollLeft: '-=100' })
        }, 10);
    });

    const handlePointerUp = contextSafe(() => {
        const scroll = scrollerRef.current

        if (scroll.scrollLeft === 0) {
            setLeftButtonEnd(true)
            setRightButtonEnd(false)
        }
        if (scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 1) {
            setRightButtonEnd(true)
            setLeftButtonEnd(false)
        }
        if (scroll.scrollLeft !== 0 && scroll.scrollLeft + scroll.clientWidth < scroll.scrollWidth - 1) {
            setLeftButtonEnd(false);
            setRightButtonEnd(false)
        }

        clearInterval(scrollInterval);
    })

    return (
        <>
            <div className={styles.projectsTitleDesk} ref={projectTitleRef}>
                <h1>My Projects</h1>
            </div>

            <div className={styles.projectsContainer}>
                <div className={styles.leftFade}></div>
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
                <div className={styles.rightFade}></div>
                {showScrollButtons ?
                    <div ref={scrollerButtonDivRef} className={styles.scrollerButtons}>
                        <svg ref={scrollRightButtonRef} onPointerDown={handleScrollRight} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp} className={leftButtonEnd === true ? styles.disabled : styles.on} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 48 48" >
                            <g>
                                <circle cx="24" cy="24" r="21.5" />
                            </g>
                            <polyline points="32.8,13.2 11.4,24 32.8,34.8 " />
                        </svg>
                        <svg ref={scrollLeftButtonRef} onPointerDown={handleScrollLeft} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp} className={rightButtonEnd === true ? styles.disabled : styles.on} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
