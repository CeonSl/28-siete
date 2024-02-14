'use client'
import React, { Dispatch, ForwardedRef, MutableRefObject, SetStateAction, useEffect } from 'react'
import useHandleInterval from './useHandleInterval'

type useResetIntervalTypes = {
    sliderRef: ForwardedRef<HTMLDivElement>,
    intervalRef: MutableRefObject<ReturnType<typeof setInterval> | null>,
    setPrevTransformValue: Dispatch<SetStateAction<number>>,
    isVisible: boolean

}

function useResetInterval({ sliderRef, intervalRef, setPrevTransformValue, isVisible }: useResetIntervalTypes) {
    const { handleInterval } = useHandleInterval({ sliderRef, intervalRef, setPrevTransformValue })

    useEffect(() => {
        if (isVisible) {
            handleInterval(false)
        } else {
            handleInterval(true)
        }
    }, [isVisible, handleInterval])
}

export default useResetInterval