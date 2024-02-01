// 'use client'
// import { useEffect, useState } from "react";
import styles from './imageContainers.module.scss'
import Image from "next/image";

export default function ImageContainers({ images, title }) {

    // const [zoomedImage, setZoomedImage] = useState();

    // useEffect(() => {
    //     const handleDocumentClick = () => {
    //         setZoomedImage(null);
    //     };

    //     document.addEventListener('click', handleDocumentClick);

    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         document.removeEventListener('click', handleDocumentClick);
    //     };
    // }, [zoomedImage]);

    // const handleImageClick = (event, img) => {
    //     event.stopPropagation();

    //     if (zoomedImage === img) {
    //         setZoomedImage(null);
    //     } else {
    //         setZoomedImage(img);
    //     }
    // };

    return (
        <>
            {images.map((img, index) => (
                    <div className={styles.imageContainers}>
                        <Image src={img} fill={true} key={index} style={{ objectFit: 'contain' }} alt={`${title} screenshots`} ></Image>
                    </div>
                )
            )}
        </>
    )
}