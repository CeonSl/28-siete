import { Dispatch, ForwardedRef, MutableRefObject, SetStateAction } from 'react'
import useHandleAutoMoving from './useHandleAutoMoving'

type useHandleIntervalTypes = {
    intervalRef: MutableRefObject<ReturnType<typeof setInterval> | null>,
    sliderRef: ForwardedRef<HTMLDivElement>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useHandleInterval({ intervalRef, sliderRef, setPrevTransformValue }: useHandleIntervalTypes) {
    const { handleAutoMoving } = useHandleAutoMoving({ sliderRef, setPrevTransformValue })
    const handleInterval = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            handleAutoMoving()
        }, 4000)
    }

    return { handleInterval }
}

export default useHandleInterval