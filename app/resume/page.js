'use client'

import Link from 'next/link'
import styles from './resume.module.scss'
import { techStacks } from '../utils/techStacks'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Resume() {

    useGSAP((context) => {
        const animatedTitles = document.querySelectorAll('[data-module-class="sectionTitle"]');
        const animatedContent = document.querySelectorAll('[data-module-class="titleContent"]');
        const resumeImages = document.querySelectorAll('[data-module-class="resumeImages"]')

        resumeImages.forEach((image) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: image,
                    toggleActions: 'play none none reverse',
                    refreshPriority:'auto'
                }
            });

            tl.from(image, {

                autoAlpha: 0,
                translateX: +50,
                ease: 'power3.out'
            })
                .to(image, {

                    translateX: 0,
                    autoAlpha: 1,
                    ease: 'power3.out'
                })
        })

        animatedTitles.forEach((title) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: title,
                    toggleActions: 'play none none reverse',
                    refreshPriority:'auto'
                },
            });

            tl.from(title, {
         
                autoAlpha: 0,
                ease: 'none',
                scale: 1.1,
            })
                .to(title, {
                 
                    autoAlpha: 1,
                    ease: 'none',
                    scale: 1,
                });
        });

        animatedContent.forEach((content) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: content,
                    toggleActions: 'play none none reverse',
                    refreshPriority:'auto',

                },
            });

            tl.from(content, {
                // duration: .6,
                autoAlpha: 0,
                ease: 'none',
                scale: 1,
                rotateX: '-90deg'

            })
                .to(content, {
                    // duration: .6,
                    autoAlpha: 1,
                    ease: 'none',
                    scale: 1,
                    rotateX: '0'

                });
        })
   
    });



    return (
        <main className={styles.resumeMain}>
            <div className={styles.resumeContainer}>
                <h1 className={styles.resumeTitle}>Resume</h1>
                <Link href='/docs/Mark_Gardner-Front-End-Dev-resume-2024.pdf' target="_blank" rel="noreferrer"><button>Downloadable PDF here</button></Link>
                <section className={styles.resumeName}>
                    <h2>MARK GARDNER</h2>
                    <h3>Front-End and Full-Stack Developer</h3>
                </section>
                <section className={styles.resumeContacts}>
                    <div className={styles.resumeContactsLeft}>
                        <p >Phone: +1 512-695-9490</p>
                        <p >LinkedIn: <a href="https://LinkedIn.com/in/Mark-Gardner-ATX" target="_blank" rel="noreferrer">LinkedIn.com/in/Mark-Gardner-ATX</a></p>
                        <p >Portfolio: <a href="https://mark-gardner.net/" target="_blank" rel="noreferrer">mark-gardner.net</a></p>
                    </div>
                    <div className={styles.resumeContactsRight}>
                        <p >Email: <a href="mailto:themarkgardner@gmail.com">themarkgardner@gmail.com</a></p>
                        <p >GitHub: <a href="https://GitHub.com/MarkGATX" target="_blank" rel="noreferrer">GitHub.com/MarkGATX</a></p>
                    </div>
                </section>
                <section id='summary' className={styles.resumeSummary}>
                    <h3 data-module-class="sectionTitle" className={styles.sectionTitle} >Summary</h3>
                    <p data-module-class="sectionTitle" >{`As a Front-End Developer, I have experience in a variety of technologies, including Next.js, React, Vercel, JavaScript, Bootstrap, Material UI, HTML, and CSS. My technical skills are complemented by 13 years of video production experience, which has given me a keen eye for detail, a talent for visual storytelling, and the soft skills needed to work with diverse teams. I’m passionate about learning and thrive on tackling new challenges head-on. With over 18 years of professional experience across multiple industries, I’ve successfully worked on teams that consistently deliver quality products and I’m dedicated to delivering high-quality work that exceeds expectations.`}</p>
                </section>
                <section className={styles.resumeTech}>
                    <h3 className={styles.sectionTitle}>Technical Skills</h3>
                    <div data-module-class="titleContent">
                        <h5 className={styles.techSectionTitle}>Technology: </h5>
                        <div className={styles.techIcons}>
                            {techStacks.tech.map((tech, index) => (
                                <Image src={`/images/tech/${tech.id}.webp`} width={24} height={24} key={tech+index} className={styles.techImage} alt={`${tech.name} icon`} title={tech.name}></Image>
                            ))}
                        </div>
                    </div>
                    <div data-module-class="titleContent">
                        <h5 className={styles.techSectionTitle}>Libraries: </h5>
                        <div className={styles.techIcons}>
                            {techStacks.libraries.map((tech, index) => (
                                <Image src={`/images/tech/${tech.id}.webp`} width={24} height={24} key={tech+index} className={styles.techImage} alt={`${tech.name} icon`} title={tech.name}></Image>
                            ))}

                        </div>
                    </div>
                    <div data-module-class="titleContent">
                        <h5 className={styles.techSectionTitle}>Tools:</h5>
                        <div className={styles.techIcons}>
                            {techStacks.tools.map((tech, index) => (
                                <Image src={`/images/tech/${tech.id}.webp`} width={24} height={24} key={tech+index} className={styles.techImage} alt={`${tech.name} icon`} title={tech.name}></Image>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={styles.resumeProjects}>
                    <h3 data-module-class="sectionTitle" className={styles.sectionTitle}>Projects Built</h3>
                    <article data-module-class="titleContent" className={styles.projectSection}>
                        <h4 className={styles.projectSectionTitle}>The Softlife</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p className={styles.projectSectionLinks}><span>Role:</span>  Sole-developer</p>
                                <p className={styles.projectSectionLinks}><span>Tools:</span>NextJS, React, JavaScript, GraphQL, Apollo GraphQL, MongoDB, SASS, CSS3, Google Fonts, Photoshop, Node.js, React Spring </p>
                                <p className={styles.projectSectionLinks}><span>Live site:</span> <a href="https://thesoftlife.xyz/" target='_blank' rel='noreferrer'>https://thesoftlife.xyz/</a> </p>

                                <p className={styles.projectSectionDesc}>A freelance development job leveraging the power of Next.js and React with Vercel hosting. I worked extensively with my clients to refine their vision for their e-commerce wishlist site in order to stay on schedule and within budget.</p>
                            </div>
                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/softlife_home.webp" fill={true} alt="Softlife image" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                    <article data-module-class="titleContent" className={styles.projectSection}>
                        <h4 className={styles.projectSectionTitle}>Luxe Cavallo</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p className={styles.projectSectionLinks}><span>Role:</span>  Sole-developer</p>
                                <p className={styles.projectSectionLinks}><span>Tools:</span>  React, GraphQL, Apollo, Express, MongoDB, Mongoose, JavaScript, CSS3, Adobe Font, Photoshop,  Node.js,  SASS, Greensock </p>
                                <p className={styles.projectSectionLinks}><span>Live site:</span> <a href="https://luxecavallo.vercel.app/" target='_blank' rel='noreferrer'>https://luxecavallo.vercel.app/</a> </p>
                                <p className={styles.projectSectionLinks}><span>GitHub Repo:</span> <a href="https://github.com/MarkGATX/luxecavallo" target="_blank" rel='noreferrer'> https://github.com/MarkGATX/luxecavallo</a></p>

                                <p className={styles.projectSectionDesc}>A fictional luxury boutique created to be highly responsive and media-rich, providing an immersive and engaging user experience. </p>
                            </div>
                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/luxecavallo_home2.webp" fill={true} alt="Luxe Cavallo image" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                    <article data-module-class="titleContent" className={styles.projectSection}>
                        <h4 className={styles.projectSectionTitle}>Migrate</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p className={styles.projectSectionLinks}><span>Role:</span>  Front-end design, Full-stack coding</p>
                                <p className={styles.projectSectionLinks}><span>Tools:</span>  React, Express, MongoDB, JavaScript, CSS3, GoogleFonts, Photoshop,  Node.js, TypeKit, SASS, Greensock, Victory Charts, Unsplash API </p>
                                <p className={styles.projectSectionLinks}><span>Live site:</span> <a href="https://migrate-abroad.herokuapp.com" target='_blank' rel='noreferrer'>https://migrate-abroad.herokuapp.com </a> </p>
                                <p className={styles.projectSectionLinks}><span>GitHub Repo:</span> <a href="https://github.com/MarkGATX/migrate" target="_blank" rel='noreferrer'> https://github.com/MarkGATX/migrate</a></p>
                                <p className={styles.projectSectionDesc}>A MERN application to help people looking to relocate to another country find a place that will feel like home utilizing complex APIs and data-visualization.</p>
                            </div>
                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/migrate-splash.webp" fill={true} alt="Migrate image" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                    <article data-module-class="titleContent" className={styles.projectSection}>
                        <h4 className={styles.projectSectionTitle}>Wheezy Waiter</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p className={styles.projectSectionLinks}><span>Role:</span>  Sole Developer</p>
                                <p className={styles.projectSectionLinks}><span>Tools:</span>  React, Material UI, JavaScript, CSS3, GoogleFonts, YouTube API, Spotify API</p>
                                <p className={styles.projectSectionLinks}><span>Live site:</span> <a href="https://markgatx.github.io/wheezywaiter/" target='_blank' rel='noreferrer'>https://markgatx.github.io/wheezywaiter/ </a> </p>
                                <p className={styles.projectSectionLinks}><span>GitHub Repo:</span> <a href="https://github.com/MarkGATX/wheezywaiter" target="_blank" rel='noreferrer'>https://github.com/MarkGATX/wheezywaiter</a></p>

                                <p className={styles.projectSectionDesc}>An unofficial site for a YouTube creator that acts as a home for all of their projects, regardless of the rise and fall of other social outlets.
                                </p>
                            </div>
                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/wheezy_main.webp" fill={true} alt="Wheezy Waiter image" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>

                    </article>
                    <article data-module-class="titleContent" className={styles.projectSection}>

                        <h4 className={styles.projectSectionTitle}>Weather Dashboard</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p className={styles.projectSectionLinks}><span>Role:</span> Sole Developer</p>
                                <p className={styles.projectSectionLinks}><span>Tools:</span> Bootstrap, JavaScript, CSS3, GoogleFonts, OpenWeather API, WeatherBit.io API</p>
                                <p className={styles.projectSectionLinks}><span>Live site:</span> <a href="https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/" target="_blank" rel='noreferrer'>https://markgatx.github.io/Weather-Dashboard-Full-Stack-Bootcamp/</a> </p>
                                <p className={styles.projectSectionLinks}><span>GitHub Repo:</span> <a href="https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp" target="_blank" rel="noreferrer">https://github.com/MarkGATX/Weather-Dashboard-Full-Stack-Bootcamp</a></p>

                                <p className={styles.projectSectionDesc}>Accurate weather forecasts for cities anywhere in the world using two weather APIs while storing past searches in a simple but powerful interface.</p>
                            </div>

                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/weather_dash_bg.webp" fill={true} alt="weather dash image" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                </section>
                <section className={styles.resumeExperience}>
                    <h3 data-module-class="sectionTitle" className={styles.sectionTitle}>Relevant Experience</h3>
                    <article data-module-class="titleContent" className={styles.experienceSection}>
                        <h4 className={styles.experienceSectionTitle} >Freelance - Full-stack Developer</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p >2023 - present,  AUSTIN</p>
                                <ul className={styles.experienceList}>
                                    <li>Contract with clients to create full-stack applications that meet their specific needs and goals.</li>
                                    <li>Develop applications using modern stacks, such as Next.js, React, Material UI, Bootstrap, GSAP, and more.</li>
                                    <li>Work with clients to develop comprehensive style guides that align with their goals and branding.</li>
                                    <li>Communicate and collaborate with clients about goals, timelines, and challenges through the development process</li>
                                </ul>
                            </div>

                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/tech_background.webp" fill={true} alt="tech image" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                    <article data-module-class="titleContent" className={styles.experienceSection}>
                        <h4 className={styles.experienceSectionTitle} >Hello World Computer Science - Engineering Instructor</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p >2023 - present,  AUSTIN</p>
                                <ul className={styles.experienceList}>
                                    <li>Part-time Teaching Assistant for Computer Science classes at the Ann Richards School for Young Women Leaders</li>
                                    <li>Teach students web development and guide troubleshooting in their code and errors in the CoSpaces coding environment.</li>
                                </ul>
                            </div>

                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/helloworld.webp" fill={true} alt="hello world cs logo" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                    <article data-module-class="titleContent" className={styles.experienceSection}>
                        <h4 className={styles.experienceSectionTitle} >Local Government Solutions  -  Developer</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p >2017 - 2018,  AUSTIN</p>
                                <ul className={styles.experienceList}>
                                    <li>Assisted in customer and business transitions to LGS after HCSS was acquired. </li>
                                    <li>Developed outlines for new customer training and retention programs and developed a revamped online brand presence.</li>
                                </ul>
                            </div>

                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/lgs.webp" fill={true} alt="local government solutions logo" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                    <article data-module-class="titleContent" className={styles.experienceSection}>
                        <h4 className={styles.experienceSectionTitle} >The Weirdlings  -  Creator and Producer</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p >2011 - 2020,   AUSTIN</p>
                                <ul className={styles.experienceList}>
                                    <li>Guided growth of the award-winning channel to reach over 15,000 subscribers and 2.8 million lifetime views on YouTube.</li>
                                    <li>Engaged with the world-wide digital video community and was elected to the International Academy of Web Television Board of Directors where I was named Secretary. </li>
                                    <li>Created and maintained all social outlets and websites for The Weirdlings using WordPress and custom CSS.</li>
                                    <li>Developed all graphic effects for every video released, ranging from lower-thirds to full spash screens.</li>
                                </ul>
                            </div>

                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/weirdlings.webp" fill={true} alt="The Weirdlings Swear Cat logo" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                    <article data-module-class="titleContent" className={styles.experienceSection}>
                        <h4 className={styles.experienceSectionTitle} >Hill Country Software and Support - VP of Development</h4>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <p >2008 - 2017,  AUSTIN</p>
                                <ul className={styles.experienceList}>
                                    <li>Implemented a complete UI/UX redesign and deployment of the web-based application of a COBOL backend with Javascript, JQuery, and updated HTML and CSS.</li>
                                    <li>Migrated the corporate website to a WordPress CMS and implemented systems to directly notify customers of updates to systems and important notes.</li>
                                </ul>
                            </div>

                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/hcss.webp" fill={true} alt="Hill Country Software and Support logo" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>

                </section>
                <section className={styles.resumeExperience}>
                    <article data-module-class="titleContent" className={styles.experienceSection}>
                        <h3 data-module-class="sectionTitle" className={styles.sectionTitle}>Education</h3>
                        <div className={styles.resumeSectionDetailsContainer} >
                            <div>
                                <ul data-module-class="titleContent" className={styles.educationList}>
                                    <li >University of Texas at Austin / Full-Stack Developer Certificate</li>
                                    <li >University of Texas at Austin  / Master in Sports Science and Nutrition</li>
                                    <li >University of Texas at Austin  / Bachelor of Arts in Plan II</li>
                                </ul>
                            </div>

                            <div data-module-class="resumeImages" className={styles.resumeImageContainer} >
                                <Image src="/images/Texas_Longhorns_logo.webp" fill={true} alt="Texas Longhorns logo" sizes='(max-width:768px) 20dvw' className={styles.resumeImage}  ></Image>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    )
}