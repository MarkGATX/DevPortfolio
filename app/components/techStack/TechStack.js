import Image from "next/image";
import styles from './techstack.module.scss'

export default function TechStack({ tech, imageSize}) {
    const size = imageSize
    console.log(size)
    return (
        <>
            {tech?.map((techVal, index) => {
                return (
                    <Image src={`/images/tech/${techVal}.webp`} width={24} height={24} key={index} className={styles.techImage} alt={`${techVal} icon`} title={techVal}></Image>
                )
            }
            )}
        </>
    )

}