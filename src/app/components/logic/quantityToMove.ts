import { MAX_VALUE_IN_PERCENTAGE } from "@/app/constants"

type quantityToMoveTypes = {
    sliderRef: React.ForwardedRef<HTMLDivElement>,
    e: any
}

export const quantityToMove = ({ sliderRef, e }: quantityToMoveTypes) => {
    if ('current' in sliderRef!) {
        const maxWidth = sliderRef.current!.offsetWidth
        const positionX = e.pageX || e.touches[0].pageX
        const positionInPercentage = (positionX / maxWidth) * MAX_VALUE_IN_PERCENTAGE
        const clampedPercentage = Math.min(positionInPercentage, MAX_VALUE_IN_PERCENTAGE)
        return clampedPercentage
    } else {
        return 0
    }
}