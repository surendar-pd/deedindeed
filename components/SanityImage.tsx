import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// const sanityConfig = client({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     useCdn: true,
// });

const SanityImage = ({ asset }:any) => {
    const imageProps = useNextSanityImage(client, asset);

    if (!imageProps) return null;

    return (
        <Image
        // @ts-ignore
            {...imageProps}
            alt={asset?.alt}
            layout="responsive"
            sizes="(max-width: 800px) 100vw, 800px"
        />
    );
};

export default SanityImage;