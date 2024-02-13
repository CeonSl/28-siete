import React, { ForwardedRef } from 'react'
import avonProject from "../../../public/images/AvonSlider.webp"
import beePlanerProject from "../../../public/images/beePlanerSlider.webp"
import coesProject from "../../../public/images/coesSlider.webp"
import ohProject from "../../../public/images/tarjetaoh3.webp"
import styles from "../page.module.css";
import AvonProjectSmall from "../../../public/images/AvonSliderSmall.webp"
import coesProjectSmall from "../../../public/images/coesSliderSmall.webp"
import ohProjectSmall from "../../../public/images/tarjetaoh3Small.webp"
import beePlanerProjectSmall from "../../../public/images/beePlanerSliderSmall.webp"
import LazyImage from './lazyImage'

type SliderImagesTypes = {
    sliderRef: ForwardedRef<HTMLDivElement>
}

function SliderImages({ sliderRef }: SliderImagesTypes) {
    return (
        <div ref={sliderRef} className={styles.Slider} >
            <LazyImage image={avonProject} smallImage={AvonProjectSmall} />
            <LazyImage image={beePlanerProject} smallImage={beePlanerProjectSmall} />
            <LazyImage image={coesProject} smallImage={coesProjectSmall} />
            <LazyImage image={ohProject} smallImage={ohProjectSmall} />
        </div>
    )
}

export default SliderImages