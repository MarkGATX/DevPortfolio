'use client'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react';
import styles from './contact_me.module.scss'
import Image from 'next/image';


export default function Contact_Me() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();
    const [message, setMessage] = useState()

    const HandleFormSubmit = (e) => {
        
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        
        emailjs.sendForm('default_service', 'portfolio_contact', formRef.current, '9YVbKkrKLvP796bXY')
            .then((result) => {
                // clear out the input after a successful submit..
                nameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
                setMessage(`Thanks for reaching out. I'll get back to you as soon as I can`);
                // setShow(true);
            }, (error) => {
                setMessage(`Sorry but something went wrong. ${error.message}`)
            });
    };


    return (
        <main>
            <section className={styles.contactMeContainer}>
                <h1 >Contact Me</h1>
                <div className={styles.contactMeFormContainer}>
                    {message ?
                        <div className={styles.contactMeFormResponse}>
                            <h3>Message sent!</h3>
                            <p>{message}</p>
                        </div>
                        :
                        <form className={styles.contactMeForm} ref={formRef} onSubmit={HandleFormSubmit}>
                            <div className={styles.contactMeFormInputs}>
                                <label className="">Your Email address</label>
                                <input type="email" className="" ref={emailRef} name='user_email' id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className={styles.contactMeFormInputs}>
                                <label className="">Your Name</label>
                                <input type="text" className="" ref={nameRef} name='user_name' id="name" />
                            </div>
                            <div className={styles.contactMeFormInputs}>
                                <label className="form-label">Your message here:</label>
                                <input type="textarea" ref={messageRef} name="message" className="" id="message" />
                            </div>
                            <button type="submit" className="" >Submit</button>                
                        </form>
                    }
                </div>
                <div className={styles.contactMeLink}>
                    <p className="">You can always reach me on GitHub or LinkedIn</p>
                    <div className={styles.contactMeLinkImages}>
                        <a className="" target="_blank" rel="noreferrer" href="https://github.com/markgatx">
                            <Image src='/images/tech/github.webp' width={48} height={48} alt='GitHub logo' /></a>
                        <a className="" target="_blank" rel="noreferrer"
                            href="https://www.linkedin.com/in/mark-gardner-ATX/">
                            <Image src='/images/tech/linked_in.webp' width={48} height={48} alt="LinkedIn logo" />
                        </a>
                    </div>
                </div>
                <div className={styles.contactMeEmail}>
                    <p>Or send me an email at <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#116;&#104;&#101;&#109;&#97;&#114;&#107;&#103;&#97;&#114;&#100;&#110;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a></p>
                </div>
            </section>
        </main >

    )
}