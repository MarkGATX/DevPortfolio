import Image from "next/image"
import { Gallery } from "next-gallery"

const images = [
    { src: "/images/cooking_curry.webp", aspect_ratio: 3/4, alt:"Making curry with my son"},
    { src: '/images/Awards_las_vegas.webp', aspect_ratio: 500/333,alt:'awards in Vegas'  },
    { src: '/images/directing_WG_pilot.webp', aspect_ratio: 500/404,alt:'on set directing my pilot project' },
    { src: '/images/step_repeat_LA.webp', aspect_ratio: 542/500, alt:'step and repeat wall at Los Angeles awards' },
    { src: '/images/paris_notre_dame.webp', aspect_ratio: 667/500, alt:'on the way to Notre Dame' },
    { src: '/images/hiking_in_mtns.webp', aspect_ratio: 500/550, alt:'hiking in the mountains' },
    { src: '/images/mugging.webp', aspect_ratio: 500/333, alt:'with the camera way too close'  },
    { src: '/images/winged_victory.webp', aspect_ratio: 500/667, alt:'my favorite statue, Winged Victory' },
    { src: '/images/exploring_Cardiff.webp', aspect_ratio: 500/375, alt:'exploring Cardiff and the Wheel' },
]

const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]

export default function AboutMeGallery() {
    return (
        <Gallery
                widths={[500, 1000, 1600]}
                ratios={[2.2, 4, 6, 8]}
                images={images}
                lastRowBehavior="preserve"
                gap = '.5em'
            />
    )
}