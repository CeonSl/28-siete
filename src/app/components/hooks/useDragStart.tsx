import React, { Dispatch, ForwardedRef, SetStateAction } from 'react'
import { quantityToMove } from '../logic/quantityToMove'
import { getTransformValue } from '../logic/getTransformValue'
import { LAST_IMAGE_VALUE } from '@/app/constants'

type useDragStartTypes = {
    setIsDragStart: Dispatch<SetStateAction<boolean>>,
    sliderRef: ForwardedRef<HTMLDivElement>,
    setPrevPageX: Dispatch<SetStateAction<number>>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useDragStart({ setIsDragStart, sliderRef, setPrevPageX, setPrevTransformValue }: useDragStartTypes) {

    const dragStart = (e: any) => {
        setIsDragStart(true)
        if ('current' in sliderRef!) {
            const clampedPercentage = quantityToMove({ sliderRef, e })
            setPrevPageX(clampedPercentage)

            if (sliderRef.current!.style.transform) {
                const absoluteValueTransform = getTransformValue(sliderRef)

                if (absoluteValueTransform < LAST_IMAGE_VALUE) {
                    setPrevTransformValue(absoluteValueTransform)
                } else if (absoluteValueTransform >= LAST_IMAGE_VALUE) {
                    setPrevTransformValue(LAST_IMAGE_VALUE)
                }
            }

        }
    }

    return { dragStart }
}

export default useDragStart