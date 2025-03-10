import { FIRST_IMAGE_VALUE, FOURTH_IMAGE_VALUE, SECOND_IMAGE_VALUE, THIRD_IMAGE_VALUE } from '@/app/constants';
import React, { Dispatch, SetStateAction } from 'react'
import { getTransformValue } from '../logic/getTransformValue';

type handleAutoMovingTypes = {
    sliderRef: React.ForwardedRef<HTMLDivElement>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useHandleAutoMoving({ sliderRef, setPrevTransformValue }: handleAutoMovingTypes) {
    const handleAutoMoving = () => {
        if ('current' in sliderRef!) {
            const transformValue = sliderRef.current?.style.transform || '';

            const transformMap: { [key: string]: string } = {
                [`translateX(-${FIRST_IMAGE_VALUE}%)`]: `translateX(-${SECOND_IMAGE_VALUE}%)`,
                [`translateX(-${SECOND_IMAGE_VALUE}%)`]: `translateX(-${THIRD_IMAGE_VALUE}%)`,
                [`translateX(-${THIRD_IMAGE_VALUE}%)`]: `translateX(-${FOURTH_IMAGE_VALUE}%)`,
                [`translateX(-${FOURTH_IMAGE_VALUE}%)`]: `translateX(-${FIRST_IMAGE_VALUE}%)`,
            };

            sliderRef.current!.style.transform = transformMap[transformValue] || `translateX(-${SECOND_IMAGE_VALUE}%)`;
            if (transformMap[transformValue]) {
                const transformValueCurrent = getTransformValue(sliderRef)
                setPrevTransformValue(transformValueCurrent)
            }
        }

    }

    return { handleAutoMoving }
}

export default useHandleAutoMoving