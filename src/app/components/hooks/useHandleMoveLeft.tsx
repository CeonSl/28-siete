import { FIRST_IMAGE_VALUE, FOURTH_IMAGE_VALUE, SECOND_IMAGE_VALUE, THIRD_IMAGE_VALUE } from '@/app/constants'
import React, { Dispatch, SetStateAction } from 'react'
import useHandleAutoMoving from './useHandleAutoMoving'

type handleMoveLeftTypes = {
    sliderRef: React.ForwardedRef<HTMLDivElement>,
    intervalRef: React.MutableRefObject<ReturnType<typeof setInterval> | null>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useHandleMoveLeft({ sliderRef, intervalRef, setPrevTransformValue }: handleMoveLeftTypes) {

    const { handleAutoMoving } = useHandleAutoMoving({ sliderRef, setPrevTransformValue })

    const handleMoveLeft = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            handleAutoMoving()
        }, 4000)

        if ('current' in sliderRef!) {
            const transformValue = sliderRef.current?.style.transform || '';
            const transformMap: { [key: string]: string } = {
                [`translateX(${FIRST_IMAGE_VALUE}%)`]: `translateX(${FOURTH_IMAGE_VALUE}%)`,
                [`translateX(${SECOND_IMAGE_VALUE}%)`]: `translateX(${FIRST_IMAGE_VALUE}%)`,
                [`translateX(${THIRD_IMAGE_VALUE}%)`]: `translateX(${SECOND_IMAGE_VALUE}%)`,
                [`translateX(${FOURTH_IMAGE_VALUE}%)`]: `translateX(${THIRD_IMAGE_VALUE}%)`,
            };
            sliderRef.current!.style.transform = transformMap[transformValue] || `translateX(${FOURTH_IMAGE_VALUE}%)`;
            if (transformMap[transformValue]) {
                const currentValueTransform = transformMap[transformValue].split("(")[1].split("")
                currentValueTransform.pop()
                currentValueTransform.pop()
                const transformValueCurrent = parseInt(currentValueTransform.join(""))
                setPrevTransformValue(transformValueCurrent)
            }
        }
    }
    return { handleMoveLeft }
}

export default useHandleMoveLeft