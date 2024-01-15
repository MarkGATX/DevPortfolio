'use client'

import Image from "next/image";
import styles from './header.module.scss'
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false)
    const headerRef = useRef();
    const hamburgerRef = useRef();
    const menuDrawerRef = useRef();



    useLayoutEffect(() => {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--headerHeight", headerHeight + "px");
        //check for window size
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        function handleMediaQueryChange(event) {
            setIsSmallScreen(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        const hamburgerMenu = hamburgerRef.current;

        if (isSmallScreen) {
            hamburgerMenu.addEventListener('click', handleHamburgerClick)
        }

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
            if (isSmallScreen) {
                hamburgerMenu.removeEventListener('click', handleHamburgerClick)
            }
        }
    }
    )

    const handleHamburgerClick = () => {
        if (!menuOpen) {
            gsap.to(menuDrawerRef.current, { duration: 1, x: -200 });
            setMenuOpen(prev => !prev)
            console.log(menuOpen)
        } else {
            gsap.to(menuDrawerRef.current, { duration: 1, x: 0 })
            setMenuOpen(prev => !prev)
            console.log(menuOpen)
        }
    }


    return (
        <>
            <header ref={headerRef}>
                <div className={styles.headerNames}>
                    <Image src='/images/mark_with_coffee.jpg' width={100} height={100} className={styles.headerAvatar} alt="Mark Gardner drinking too much coffee"></Image>
                    <h2>Mark Gardner</h2>
                </div>
                {isSmallScreen ?
                    <>
                        <Image src='/images/menu_icon.svg' ref={hamburgerRef} width={32} height={32} className={styles.hamburgerMenu} alt="Hamburger menu for mobile navigation"></Image>
                        <nav className={styles.menuDrawer} ref={menuDrawerRef}>
                            <ul>
                                <li>Portfolio</li>
                                <li>About me...</li>
                                <li>Resume</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </>
                    :
                    <nav>
                        <ul>
                            <li>Portfolio</li>
                            <li>About me...</li>
                            <li>Resume</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                }
            </header >
        </>
    )
}