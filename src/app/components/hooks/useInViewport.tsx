import { RefObject, useEffect, useMemo, useState } from "react";

type useIsInViewportTypes = {
    ref: RefObject<HTMLElement | null>
}

function useIsInViewport({ ref }: useIsInViewportTypes) {
    const [isIntersecting, setIsIntersecting] = useState(false);


    useEffect(() => {
        const observer =
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            )

        observer.observe(ref.current!);

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

export default useIsInViewport