'use client'

import styles from './projectsContainer.module.scss'
import { projectData } from '../../utils/projectData'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import ProjectCardSuspense from '../ProjectCard/ProjectCardSuspense';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'


export default function ProjectsContainer() {
    gsap.registerPlugin(ScrollTrigger)
    const projectTitleRef = useRef();
    const scrollerRef = useRef();
    const scrollUpButtonRef = useRef();
    const scrollDownButtonRef = useRef();
    const cardAnimationContainerRef = useRef();
    const [showScrollButtons, setShowScrollButtons] = useState(false);
    const [upButtonEnd, setUpButtonEnd] = useState(true);
    const [downButtonEnd, setDownButtonEnd] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState(projectData)
  


    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        scroller.addEventListener('wheel', handleWheel);

        const projectsContainerOffset = projectTitleRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty("--projectsContainerOffset", (projectsContainerOffset.top + 100) + "px");
        
        setShowScrollButtons(true)

        return () => {
           
            scroller.removeEventListener('wheel', handleWheel);
        }
    }, []
    )

    const { contextSafe } = useGSAP()

    useGSAP(() => {
        const animatedProjects = document.querySelectorAll('[data-type="projectCard"]')
        animatedProjects.forEach((project) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    toggleActions: 'play none none reverse',
                    scroller: '#projectsScroller',
                    scrub: .5,

                },
            });
            tl.to(project, {
                keyframes: {
                    "0%": { scale: .7, autoAlpha: 0, },
                    "10%": { scale: 1, autoAlpha: 1, ease: 'power3.inOut' },
                    "90%": { scale: 1, autoAlpha: 1, ease: 'power3.inOut' }, // finetune with individual eases
                    "100%": { scale: .7, autoAlpha: 0, },
                },
                // ease: 'power1.inOut'
            });
        })

    }, []
    )

    let scrollInterval;

    const handleWheel = contextSafe((e) => {
        e.preventDefault();
        const deltaY = e.deltaY * 2.5;
        gsap.to(scrollerRef.current, { scrollTop: `+=${deltaY}`, ease: 'power1.out', duration: .9 })

        const scroll = scrollerRef.current

        if (scroll.scrollTop === 0) {
            setUpButtonEnd(true)
            setDownButtonEnd(false)
        }
        if (scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight - 1) {
            setDownButtonEnd(true)
            setUpButtonEnd(false)
        }
        if (scroll.scrollTop !== 0 && scroll.scrollTop + scroll.clientHeight < scroll.scrollHeight - 1) {
            setUpButtonEnd(false);
            setDownButtonEnd(false)
        }
    });

    const handleScrollDown = contextSafe(() => {
        const scroll = scrollerRef.current;
        scrollInterval = setInterval(() => {
            gsap.to(scroll, { scrollTop: '+=100' })
        }, 20);
    });

    const handleScrollUp = contextSafe(() => {
        const scroll = scrollerRef.current
        scrollInterval = setInterval(() => {
            gsap.to(scroll, { scrollTop: '-=100' })
        }, 20);
    });

    const handlePointerUp = contextSafe(() => {
        const scroll = scrollerRef.current
        if (scroll.scrollTop === 0) {
            setUpButtonEnd(true)
            setDownButtonEnd(false)
        }
        if (scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight - 1) {
            setDownButtonEnd(true)
            setUpButtonEnd(false)
        }
        if (scroll.scrollTop !== 0 && scroll.scrollTop + scroll.clientHeight < scroll.scrollHeight - 1) {
            setUpButtonEnd(false);
            setDownButtonEnd(false)
        }

        clearInterval(scrollInterval);

    })

    const handleFilterChange = (event) => {
        const filter = event.target.value;
        switch (filter) {
            case 'all':
                setFilteredProjects(projectData)
                break;
            case "dev":
                setFilteredProjects(projectData.filter(project => project.type === "dev"));
                break;
            case "vid":
                setFilteredProjects(projectData.filter(project => project.type === "vid"));
                break;
            case "react":
                setFilteredProjects(projectData.filter(project => project.tech.includes("react")));
                break;
            case "next":
                setFilteredProjects(projectData.filter(project => project.tech.includes("nextJS")));
                break;
            case "graphQL":
                setFilteredProjects(projectData.filter(project => project.tech.includes("graphQL")));
                break;
            case "materialUI":
                setFilteredProjects(projectData.filter(project => project.tech.includes("materialUI")));
                break;
            case "sass":
                setFilteredProjects(projectData.filter(project => project.tech.includes("sass")));
                break;
            default:
                setFilteredProjects(projectData)
                break;
        };
    }

    return (
        <>
            <div className={styles.projectsTitle} ref={projectTitleRef}>
            <h1>My Projects...</h1>
            <div className="">
                    <select className="" aria-label="Project type options" onChange={handleFilterChange}>
                        <option disabled>
                            Filter Projects
                        </option>
                        <optgroup label="All Projects">
                            <option value="all">
                                All Projects
                            </option>
                        </optgroup>
                        <optgroup label="Software Dev">
                            <option value="dev">
                                All Software Dev
                            </option>
                            <option value="graphQL">
                                GraphQL
                            </option>
                            <option value="materialUI">
                                MaterialUI
                            </option>
                            <option value="next">
                                Next.JS
                            </option>
                            <option value="react">
                                React
                            </option>
                            <option value="sass">
                                SASS
                            </option>
                        </optgroup>
                        <optgroup label="Video">
                            <option value="vid">
                                All Video
                            </option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className={styles.projectsAndScroller}>
                <div className={styles.projectsContainer}>
                    <div className={styles.topFade}></div>
                    <div ref={scrollerRef} id='projectsScroller' className={styles.projectsScroller}>
                        <div className={styles.projectCardSpacer}></div>
                        <div ref={cardAnimationContainerRef} className={styles.projectsAnimateWrapper}>
                            {filteredProjects?.map((project, key) =>
                                <Suspense fallback={<ProjectCardSuspense />} key={project.displayClass}>
                                    <ProjectCard projectData={project} key={project.displayClass} />
                                </Suspense>
                            )
                            }

                        </div>
                        <div className={styles.projectCardSpacer}></div>
                    </div>
                    <div className={styles.bottomFade}></div>
                </div>
                {showScrollButtons ?
                    <div className={styles.scrollerButtons}>
                        <svg ref={scrollUpButtonRef} onPointerDown={handleScrollUp} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp} className={upButtonEnd === true ? styles.disabled : styles.on} role="button"
                            aria-label="Scroll up" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 48 48" >
                            <g>
                                <circle cx="24" cy="24" r="21.5" />
                            </g>
                            <polyline points="34.8,32 24,10.6 13.2,32 " />
                        </svg>
                        <svg ref={scrollDownButtonRef} onPointerDown={handleScrollDown} onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp} className={downButtonEnd === true ? styles.disabled : styles.on} version="1.1" id="Layer_1" role="button"
                            aria-label="Scroll down" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 48 48" >
                            <g>
                                <circle cx="24" cy="24" r="21.5" />
                            </g>
                            <polyline points="34.8,14.9 24,36.3 13.2,14.9 " />
                        </svg>

                    </div>
                    :
                    null}
            </div>
        </>
    )
}