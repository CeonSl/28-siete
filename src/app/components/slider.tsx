'use client'
import React, { useRef, useState } from 'react'
import styles from "../page.module.css";
import ArrowLeftSlider from './arrowLeftSlider'
import ArrowRightSlider from './arrowRightSlider'
import useHandleMoveLeft from './hooks/useHandleMoveLeft'
import useHandleMoveRight from './hooks/useHandleMoveRight'
import useAutoMovingEffect from './hooks/useAutoMovingEffect'
import SliderImages from './sliderImages'
import useDragStart from './hooks/useDragStart';
import useDraggable from './hooks/useDraggable';
import useHandleDragStop from './hooks/useHandleDragStop';
import useResetInterval from './hooks/useResetInterval';
import { usePageVisibility } from './hooks/usePageVisibility';

function Slider() {

    const sliderRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const [isDragStart, setIsDragStart] = useState<boolean>(false)
    const [prevPageX, setPrevPageX] = useState<number>(0)
    const [prevTransformValue, setPrevTransformValue] = useState<number>(0)

    const { handleMoveLeft } = useHandleMoveLeft({ sliderRef, intervalRef, setPrevTransformValue })
    const { handleMoveRight } = useHandleMoveRight({ sliderRef, intervalRef, setPrevTransformValue })
    const { dragStart } = useDragStart({ setIsDragStart, sliderRef, setPrevPageX, setPrevTransformValue })
    const { draggable } = useDraggable({ sliderRef, intervalRef, isDragStart, setPrevTransformValue, prevPageX, prevTransformValue })
    const { dragStop, dragStopLeave } = useHandleDragStop({ sliderRef, prevTransformValue, setPrevTransformValue, setIsDragStart })

    useAutoMovingEffect({ intervalRef, sliderRef, setPrevTransformValue })
    const isVisible = usePageVisibility();
    useResetInterval({ intervalRef, setPrevTransformValue, sliderRef, isVisible })

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
            <SliderImages sliderRef={sliderRef} />
        </section >
    )
}

export default Slider