import { FIRST_IMAGE_VALUE, FOURTH_IMAGE_VALUE, SECOND_IMAGE_VALUE, THIRD_IMAGE_VALUE } from '@/app/constants'
import { Dispatch, ForwardedRef, MutableRefObject, SetStateAction } from 'react'
import { getTransformValue } from '../logic/getTransformValue'
import useHandleInterval from './useHandleInterval'

type handleMoveRightTypes = {
    sliderRef: ForwardedRef<HTMLDivElement>,
    intervalRef: MutableRefObject<ReturnType<typeof setInterval> | null>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>

}

function useHandleMoveRight({ sliderRef, intervalRef, setPrevTransformValue }: handleMoveRightTypes) {

    const { handleInterval } = useHandleInterval({ sliderRef, intervalRef, setPrevTransformValue })

    const handleMoveRight = () => {

        handleInterval(true)

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
    return { handleMoveRight }
}

export default useHandleMoveRight