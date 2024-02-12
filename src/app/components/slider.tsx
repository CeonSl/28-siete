'use client'
import React, { useRef, useState } from 'react'
import avonProject from "../../../public/images/AvonSlider.webp"
import beePlanerProject from "../../../public/images/beePlanerSlider.webp"
import coesProject from "../../../public/images/coesSlider.webp"
import ohProject from "../../../public/images/tarjetaoh3.webp"
import Image from "next/image";
import styles from "../page.module.css";
import ArrowLeftSlider from './arrowLeftSlider'
import ArrowRightSlider from './arrowRightSlider'
import useHandleMoveLeft from './hooks/useHandleMoveLeft'
import useHandleMoveRight from './hooks/useHandleMoveRight'
import AvonProjectSmall from "../../../public/images/AvonSliderSmall.webp"
import coesProjectSmall from "../../../public/images/coesSliderSmall.webp"
import ohProjectSmall from "../../../public/images/tarjetaoh3Small.webp"
import beePlanerProjectSmall from "../../../public/images/beePlanerSliderSmall.webp"
import { FIRST_IMAGE_VALUE, LAST_IMAGE_VALUE, SECOND_IMAGE_VALUE, THIRD_IMAGE_VALUE } from '../constants'
import useAutoMovingEffect from './hooks/useAutoMovingEffect'
import useHandleInterval from './hooks/useHandleInterval'
import { quantityToMove } from './logic/quantityToMove'
import { getTransformValue } from './logic/getTransformValue'

function Slider() {

    const sliderRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const [isDragStart, setIsDragStart] = useState<boolean>(false)
    const [prevPageX, setPrevPageX] = useState<number>(0)
    const [prevTransformValue, setPrevTransformValue] = useState<number>(0)

    const { handleMoveLeft } = useHandleMoveLeft({ sliderRef, intervalRef, setPrevTransformValue })
    const { handleMoveRight } = useHandleMoveRight({ sliderRef, intervalRef, setPrevTransformValue })
    const { handleInterval } = useHandleInterval({ sliderRef, intervalRef, setPrevTransformValue })

    useAutoMovingEffect({ intervalRef, sliderRef, setPrevTransformValue })

    const dragStart = (e: any) => {
        setIsDragStart(true)
        if (sliderRef.current) {
            const clampedPercentage = quantityToMove({ sliderRef, e })
            setPrevPageX(clampedPercentage)

            if (sliderRef.current.style.transform) {
                const absoluteValueTransform = getTransformValue(sliderRef)

                if (absoluteValueTransform < LAST_IMAGE_VALUE) {
                    setPrevTransformValue(absoluteValueTransform)
                } else if (absoluteValueTransform >= LAST_IMAGE_VALUE) {
                    setPrevTransformValue(LAST_IMAGE_VALUE)
                }
            }

        }
    }

    const draggable = (e: any) => {
        if (!isDragStart) return

        if (sliderRef.current) {
            const clampedPercentage = quantityToMove({ sliderRef, e })
            let completeMovement
            if (clampedPercentage > prevPageX && prevTransformValue != 0) {
                const sendMovement = clampedPercentage - prevPageX
                completeMovement = prevTransformValue - sendMovement
            } else if (prevPageX > clampedPercentage && prevTransformValue < LAST_IMAGE_VALUE) {
                const sendMovement = prevPageX - clampedPercentage
                completeMovement = prevTransformValue + sendMovement
                if (completeMovement > LAST_IMAGE_VALUE) {
                    completeMovement = LAST_IMAGE_VALUE
                }
            }
            sliderRef.current.style.transform = `translateX(-${completeMovement}%)`
        }

        handleInterval()
    }

    const dragStop = () => {
        setIsDragStart(false)
        autoSlide()
    }

    const dragStopLeave = () => {
        setIsDragStart(false)
    }

    const autoSlide = () => {
        if (sliderRef.current && sliderRef.current.style.transform) {
            const currentValueTransform = sliderRef.current.style.transform.split("(")[1].split("")
            currentValueTransform.pop()
            currentValueTransform.pop()
            const transformValue = parseInt(currentValueTransform.join(""))

            if (Math.abs(transformValue) == Math.abs(prevTransformValue)) return

            if (Math.abs(transformValue) > Math.abs(prevTransformValue)) {
                if (transformValue < FIRST_IMAGE_VALUE && (Math.abs(prevTransformValue) < 1 && Math.abs(prevTransformValue) < 100)) {
                    sliderRef.current.style.transform = `translateX(-100%)`
                    setPrevTransformValue(-100)
                } else if (transformValue < SECOND_IMAGE_VALUE && (Math.abs(prevTransformValue) > 99 && Math.abs(prevTransformValue) < 200)) {
                    sliderRef.current.style.transform = `translateX(-200%)`
                    setPrevTransformValue(-200)
                } else if (transformValue < THIRD_IMAGE_VALUE && (Math.abs(prevTransformValue) > 199 && Math.abs(prevTransformValue) < 300)) {
                    sliderRef.current.style.transform = `translateX(-300%)`
                    setPrevTransformValue(-300)
                }
            } else {
                if (transformValue <= THIRD_IMAGE_VALUE && (Math.abs(prevTransformValue) > 200 && Math.abs(prevTransformValue) < 301)) {
                    sliderRef.current.style.transform = `translateX(-200%)`
                    setPrevTransformValue(-200)
                } else if (transformValue <= SECOND_IMAGE_VALUE && (Math.abs(prevTransformValue) > 100 && Math.abs(prevTransformValue) < 201)) {
                    sliderRef.current.style.transform = `translateX(-100%)`;
                    setPrevTransformValue(-100);
                } else if (transformValue <= FIRST_IMAGE_VALUE && (Math.abs(prevTransformValue) > 0 && Math.abs(prevTransformValue) < 101)) {
                    sliderRef.current.style.transform = `translateX(0%)`;
                    setPrevTransformValue(0);
                }

            }
        }
    }


    const handleOnLoaded = (img: any) => {
        img.classList.add(styles.loaded);
    }

    return (
        <section className={styles.containerSlider} id='Proyectos' onTouchStart={(e) => { dragStart(e) }}
            onTouchMove={(e) => draggable(e)}
            onTouchEnd={() => dragStop()}
            onMouseLeave={() => dragStopLeave()}
            onMouseUp={() => dragStop()}
            onMouseDown={(e) => dragStart(e)}
            onMouseMove={(e) => draggable(e)}>
            <button onClick={() => handleMoveLeft()} className={styles.arrowLeft}><ArrowLeftSlider /></button>
            <button onClick={() => handleMoveRight()} className={styles.arrowRight}><ArrowRightSlider /></button>
            <div className={styles.opacityBg}>
            </div>

            <div ref={sliderRef} className={styles.Slider} >
                <div className={styles.blurImg} style={{ backgroundImage: `url(${AvonProjectSmall.src})`, width: "100%" }}>
                    <Image onLoadingComplete={(img) => { handleOnLoaded(img) }} unoptimized src={avonProject} alt="Proyecto Avon" loading='lazy' draggable={false} />
                </div>
                <div className={styles.blurImg} style={{ backgroundImage: `url(${beePlanerProjectSmall.src})`, width: "100%" }}>
                    <Image onLoadingComplete={(img) => { handleOnLoaded(img) }} unoptimized src={beePlanerProject} alt="Proyecto Bee Planner" loading='lazy' draggable={false} />
                </div>
                <div className={styles.blurImg} style={{ backgroundImage: `url(${coesProjectSmall.src})`, width: "100%" }}>
                    <Image onLoadingComplete={(img) => { handleOnLoaded(img) }} unoptimized src={coesProject} alt="Proyecto COES" loading='lazy' draggable={false} />
                </div>
                <div className={styles.blurImg} style={{ backgroundImage: `url(${ohProjectSmall.src})`, width: "100%" }}>
                    <Image onLoadingComplete={(img) => { handleOnLoaded(img) }} unoptimized src={ohProject} alt="Proyecto Tarjeta Oh!" loading='lazy' draggable={false} />
                </div>
            </div>
        </section>
    )
}

export default Slider