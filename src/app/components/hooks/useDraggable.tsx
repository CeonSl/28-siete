import React, { Dispatch, ForwardedRef, MutableRefObject, SetStateAction } from 'react'
import useHandleInterval from './useHandleInterval'
import { LAST_IMAGE_VALUE } from '@/app/constants'
import { quantityToMove } from '../logic/quantityToMove'

type useDraggableTypes = {
    sliderRef: ForwardedRef<HTMLDivElement>,
    intervalRef: MutableRefObject<ReturnType<typeof setInterval> | null>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>,
    isDragStart: boolean,
    prevPageX: number,
    prevTransformValue: number
}

function useDraggable({ sliderRef, intervalRef, setPrevTransformValue, isDragStart, prevPageX, prevTransformValue }: useDraggableTypes) {
    const { handleInterval } = useHandleInterval({ sliderRef, intervalRef, setPrevTransformValue })

    const draggable = (e: any) => {
        if (!isDragStart) return

        if ('current' in sliderRef!) {
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
            sliderRef.current!.style.transform = `translateX(-${completeMovement}%)`
        }

        handleInterval(true)
    }
    return { draggable }
}

export default useDraggable