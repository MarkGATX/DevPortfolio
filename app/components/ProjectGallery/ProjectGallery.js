import { Gallery } from "next-gallery";

export default function ProjectGallery({widths, ratios, images}) {

    return (
        <Gallery
                widths={widths}
                ratios={ratios}
                images={images}
                lastRowBehavior="preserve"
                gap = '.5em'
            />
    )
}