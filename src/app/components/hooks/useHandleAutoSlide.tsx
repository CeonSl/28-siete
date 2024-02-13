import { FIRST_IMAGE_VALUE, FOURTH_IMAGE_VALUE, SECOND_IMAGE_VALUE, THIRD_IMAGE_VALUE } from '@/app/constants'
import React, { Dispatch, ForwardedRef, SetStateAction } from 'react'
import { getTransformValue } from '../logic/getTransformValue'

type useHandleAutoSlideTypes = {
    sliderRef: ForwardedRef<HTMLDivElement>,
    prevTransformValue: number,
    setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useHandleAutoSlide({ sliderRef, prevTransformValue, setPrevTransformValue }: useHandleAutoSlideTypes) {
    const autoSlide = () => {
        if ('current' in sliderRef! && sliderRef.current!.style.transform) {
            const transformValue = getTransformValue(sliderRef)

            if (transformValue == Math.abs(prevTransformValue)) return

            if (transformValue > Math.abs(prevTransformValue)) {
                if (transformValue > FIRST_IMAGE_VALUE && (prevTransformValue < 1 && prevTransformValue < SECOND_IMAGE_VALUE)) {
                    sliderRef.current!.style.transform = `translateX(-${SECOND_IMAGE_VALUE}%)`
                    setPrevTransformValue(SECOND_IMAGE_VALUE)
                } else if (transformValue > SECOND_IMAGE_VALUE && (prevTransformValue > 99 && prevTransformValue < THIRD_IMAGE_VALUE)) {
                    sliderRef.current!.style.transform = `translateX(-${THIRD_IMAGE_VALUE}%)`
                    setPrevTransformValue(THIRD_IMAGE_VALUE)
                } else if (transformValue > THIRD_IMAGE_VALUE && (prevTransformValue > 199 && prevTransformValue < FOURTH_IMAGE_VALUE)) {
                    sliderRef.current!.style.transform = `translateX(-${FOURTH_IMAGE_VALUE}%)`
                    setPrevTransformValue(FOURTH_IMAGE_VALUE)
                }
            } else {
                if (transformValue >= THIRD_IMAGE_VALUE && (prevTransformValue > 200 && prevTransformValue < 301)) {
                    sliderRef.current!.style.transform = `translateX(-${THIRD_IMAGE_VALUE}%)`
                    setPrevTransformValue(THIRD_IMAGE_VALUE)
                } else if (transformValue >= SECOND_IMAGE_VALUE && (prevTransformValue > 100 && prevTransformValue < 201)) {
                    sliderRef.current!.style.transform = `translateX(-${SECOND_IMAGE_VALUE}%)`;
                    setPrevTransformValue(SECOND_IMAGE_VALUE);
                } else if (transformValue >= FIRST_IMAGE_VALUE && (prevTransformValue > 0 && prevTransformValue < 101)) {
                    sliderRef.current!.style.transform = `translateX(${FIRST_IMAGE_VALUE}%)`;
                    setPrevTransformValue(FIRST_IMAGE_VALUE);
                }

            }
        }
    }

    return { autoSlide }
}

export default useHandleAutoSlide