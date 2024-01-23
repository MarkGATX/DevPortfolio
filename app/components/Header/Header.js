'use client'

import Image from "next/image";
import styles from './header.module.scss'
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";


export default function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false)
    const headerRef = useRef();
    const hamburgerRef = useRef();
    const menuDrawerRef = useRef();
    const toggleDiscRef = useRef();
    const lightModeTextRef = useRef();
    const darkModeTextRef = useRef();

    useLayoutEffect(() => {
        const headerHeight = headerRef.current.offsetHeight;
        const hamburgerMenu = hamburgerRef.current;
        document.documentElement.style.setProperty("--headerHeight", headerHeight + "px");
        //check for window size
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        function handleMediaQueryChange(event) {
            setIsSmallScreen(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        if (isSmallScreen) {
            hamburgerMenu.addEventListener('click', handleHamburgerClick);
        }
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            toggleDiscRef.current.style.left = "66px";
            lightModeTextRef.current.style.color = 'var(--onSecondaryContainer)'
            darkModeTextRef.current.style.color = 'transparent'
        } else {
            toggleDiscRef.current.style.left = "4px";
            lightModeTextRef.current.style.color = 'transparent'
            darkModeTextRef.current.style.color = 'var(--onSecondaryContainer)'
        
        }
        // darkModeToggle();

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
            if (isSmallScreen) {
                hamburgerMenu.removeEventListener('click', handleHamburgerClick)
            }
        }
    },
    )

    const handleHamburgerClick = useCallback(() => {
        console.log('click')
        if (!menuOpen) {
            gsap.to(menuDrawerRef.current, { duration: .5, x: -200 });
            setMenuOpen(prev => !prev)
        } else {
            let tl = gsap.timeline();
            tl.to(menuDrawerRef.current, { duration: .3, x: -206 })
                .to(menuDrawerRef.current, { duration: .5, x: 0 })
            setMenuOpen(prev => !prev)
        }
    })


    const darkModeToggle = () =>  {
        const element = document.querySelector('html[data-theme]')
        const theme = element.dataset.theme
        if (theme === 'light') {
            toggleDiscRef.current.style.left = "66px";
          element.dataset.theme='dark'
          lightModeTextRef.current.style.color = 'var(--onSecondaryContainer)'
          darkModeTextRef.current.style.color = 'transparent'
        } else {
          element.dataset.theme ='light'
          toggleDiscRef.current.style.left = "4px";
          lightModeTextRef.current.style.color = 'transparent'
          darkModeTextRef.current.style.color = 'var(--onSecondaryContainer)'
        }
      }

    return (
        <>
            <header ref={headerRef}>
                <a href='/'>
                    <div className={styles.headerNames}>
                        <Image src='/images/mark_with_coffee.jpg' width={100} height={100} className={styles.headerAvatar} alt="Mark Gardner drinking too much coffee"></Image>
                        <h2>Mark Gardner</h2>
                    </div>
                </a>
                <div className={styles.darkModeToggle} onClick={darkModeToggle}>
                    <sub ref={lightModeTextRef}>light</sub>
                    <sub ref={darkModeTextRef}>dark</sub>
                    <div ref={toggleDiscRef} className={styles.darkModeToggleDisc}></div>
                </div>
                {isSmallScreen ?
                    <>
                        <div className={styles.hamburgerMenuContainer}>

                            <Image src='/images/menu_icon.svg' ref={hamburgerRef} width={32} height={32} className={styles.hamburgerMenu} alt="Hamburger menu for mobile navigation"></Image>
                        </div>
                        <nav className={styles.menuDrawer} ref={menuDrawerRef}>
                            <ul>
                                <Link href='/' onClick={handleHamburgerClick}><li>Portfolio</li></Link>
                                <Link href='/about_me' onClick={handleHamburgerClick}><li>About me...</li></Link>
                                <Link href="/resume" onClick={handleHamburgerClick}><li>Resume</li></Link>
                                <Link href="/contact_me" onClick={handleHamburgerClick}> <li>Contact</li></Link>
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