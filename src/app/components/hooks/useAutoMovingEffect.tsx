import { Dispatch, SetStateAction, useEffect } from "react";
import useHandleAutoMoving from "./useHandleAutoMoving";

type useAutoMovingEffectTypes = {
    intervalRef: React.MutableRefObject<ReturnType<typeof setInterval> | null>,
    sliderRef: React.ForwardedRef<HTMLDivElement>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useAutoMovingEffect({ intervalRef, sliderRef, setPrevTransformValue }: useAutoMovingEffectTypes) {

    const { handleAutoMoving } = useHandleAutoMoving({ sliderRef, setPrevTransformValue })

    useEffect(() => {
        if (intervalRef) {
            intervalRef.current = setInterval(() => {
                handleAutoMoving()
            }, 4000)

            return () => {
                if (intervalRef.current !== null) {
                    clearInterval(intervalRef.current)
                }
            }
        }
    }, [handleAutoMoving, intervalRef]);
}

export default useAutoMovingEffect