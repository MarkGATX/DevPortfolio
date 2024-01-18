'use client'

import Image from "next/image";
import styles from './header.module.scss'
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

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
            gsap.to(menuDrawerRef.current, { duration: .5, x: -200 });
            setMenuOpen(prev => !prev)
         
        } else {
            let tl = gsap.timeline();
            tl.to(menuDrawerRef.current, { duration: .3, x: -206 })
                .to(menuDrawerRef.current, { duration: .5, x: 0 })
            setMenuOpen(prev => !prev)
         
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
                {isSmallScreen ?
                    <>
                        <div className={styles.hamburgerMenuContainer}>
                           
                        <Image src='/images/menu_icon.svg' ref={hamburgerRef} width={32} height={32} className={styles.hamburgerMenu} alt="Hamburger menu for mobile navigation"></Image>
                        </div>
                        <nav className={styles.menuDrawer} ref={menuDrawerRef}>
                            <ul>
                                <li>Portfolio</li>
                                <Link href='/about_me'><li>About me...</li></Link>
                                <Link href="/resume"><li>Resume</li></Link>
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