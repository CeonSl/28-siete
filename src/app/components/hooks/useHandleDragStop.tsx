import { Dispatch, ForwardedRef, SetStateAction } from "react"
import useHandleAutoSlide from "./useHandleAutoSlide"

type useHandleDragStopTypes = {
  setIsDragStart: Dispatch<SetStateAction<boolean>>,
  sliderRef: ForwardedRef<HTMLDivElement>,
  prevTransformValue: number,
  setPrevTransformValue: Dispatch<SetStateAction<number>>
}

function useHandleDragStop({ setIsDragStart, sliderRef, prevTransformValue, setPrevTransformValue }: useHandleDragStopTypes) {

  const { autoSlide } = useHandleAutoSlide({ sliderRef, prevTransformValue, setPrevTransformValue })

  const dragStop = () => {
    setIsDragStart(false)
    autoSlide()
  }

  const dragStopLeave = () => {
    setIsDragStart(false)
  }

  return { dragStop, dragStopLeave }
}

export default useHandleDragStop