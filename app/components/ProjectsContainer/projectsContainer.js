'use client'

import styles from './projectsContainer.module.scss'
import {projectData} from '../../utils/projectData'
import ProjectCard from '../ProjectCard/ProjectCard'
import { useLayoutEffect, useRef, useState } from 'react';

export default function ProjectsContainer() {
    const projectTitleRef=useRef();

    useLayoutEffect (() => {      
    // const projectsTitleHeight =  projectTitleRef.current.offsetHeight;
    // document.documentElement.style.setProperty("--projectsTitleHeight", projectsTitleHeight + "px");
    const projectsContainerOffset =  projectTitleRef.current.getBoundingClientRect();
    document.documentElement.style.setProperty("--projectsContainerOffset", projectsContainerOffset.top + "px");
    
    }
    )
    
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
                        <ProjectCard projectData={project} />
                    )
                    }
                    <div className={styles.projectCardSpacer}></div>
                </div>
                <div className={styles.bottomFade}></div>
            </div>
        </>
    )
}