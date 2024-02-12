import { ForwardedRef } from "react"


export const getTransformValue = (sliderRef: ForwardedRef<HTMLDivElement>) => {
    if ('current' in sliderRef!) {
        const currentValueTransform = sliderRef.current!.style.transform
        const separateByPercentSign = currentValueTransform.split("%")[0]
        const numberValueTransform = separateByPercentSign.split("(")[1]
        const valueTransform = parseInt(numberValueTransform)
        return Math.abs(valueTransform)
    } else {
        return 0
    }
}