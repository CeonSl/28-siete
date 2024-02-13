import Image, { StaticImageData } from 'next/image'
import styles from "../page.module.css";
import React from 'react'
import { handleOnLoaded } from './logic/handleOnLoaded';

type LazyImageTypes = {
    image: StaticImageData,
    smallImage: StaticImageData
}

function LazyImage({ image, smallImage }: LazyImageTypes) {
    return (
        <div className={styles.blurImg} style={{ backgroundImage: `url(${smallImage.src})`, width: "100%" }}>
            <Image onLoad={(img) => { handleOnLoaded(img) }} unoptimized src={image} alt="Proyecto Avon" loading='lazy' draggable={false} />
        </div>
    )
}

export default LazyImage