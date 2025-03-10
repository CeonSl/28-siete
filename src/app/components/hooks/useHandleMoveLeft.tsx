import { FIRST_IMAGE_VALUE, FOURTH_IMAGE_VALUE, SECOND_IMAGE_VALUE, THIRD_IMAGE_VALUE } from '@/app/constants'
import React, { Dispatch, SetStateAction } from 'react'
import { getTransformValue } from '../logic/getTransformValue'
import useHandleInterval from './useHandleInterval'

type handleMoveLeftTypes = {
    sliderRef: React.ForwardedRef<HTMLDivElement>,
    intervalRef: React.MutableRefObject<ReturnType<typeof setInterval> | null>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useHandleMoveLeft({ sliderRef, intervalRef, setPrevTransformValue }: handleMoveLeftTypes) {
    const { handleInterval } = useHandleInterval({ sliderRef, intervalRef, setPrevTransformValue })

    const handleMoveLeft = () => {
        handleInterval(true)

        if ('current' in sliderRef!) {
            const transformValue = sliderRef.current?.style.transform || '';
            const transformMap: { [key: string]: string } = {
                [`translateX(-${FIRST_IMAGE_VALUE}%)`]: `translateX(-${FOURTH_IMAGE_VALUE}%)`,
                [`translateX(-${SECOND_IMAGE_VALUE}%)`]: `translateX(-${FIRST_IMAGE_VALUE}%)`,
                [`translateX(-${THIRD_IMAGE_VALUE}%)`]: `translateX(-${SECOND_IMAGE_VALUE}%)`,
                [`translateX(-${FOURTH_IMAGE_VALUE}%)`]: `translateX(-${THIRD_IMAGE_VALUE}%)`,
            };
            sliderRef.current!.style.transform = transformMap[transformValue] || `translateX(-${FOURTH_IMAGE_VALUE}%)`;
            if (transformMap[transformValue]) {
                const transformValueCurrent = getTransformValue(sliderRef)
                setPrevTransformValue(transformValueCurrent)
            }
        }
    }
    return { handleMoveLeft }
}

export default useHandleMoveLeft