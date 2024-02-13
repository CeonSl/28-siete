'use client'
import { useState, useEffect } from 'react';
import { getBrowserVisibilityProp, getIsDocumentHidden } from '../logic/helpersVisibility';

export function usePageVisibility() {
    const [isVisible, setIsVisible] = useState(getIsDocumentHidden());

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(getIsDocumentHidden());
        };

        const visibilityChange = getBrowserVisibilityProp();
        document.addEventListener(visibilityChange!, handleVisibilityChange);

        return () => {
            document.removeEventListener(visibilityChange!, handleVisibilityChange);
        };
    }, []);

    return isVisible;
}