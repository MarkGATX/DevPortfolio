import { Gallery } from "next-gallery";

export default function ProjectGallery({widths, ratios, images}) {
    console.log(widths)
    console.log(ratios)
    console.log('gallery' + images)
    return (
        <Gallery
                widths={widths}
                ratios={ratios}
                images={[images]}
                lastRowBehavior="preserve"
                gap = '.5em'
            />
    )
}