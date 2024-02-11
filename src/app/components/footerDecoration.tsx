'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../css/footerDecoration.module.css'
import stylesMain from '../page.module.css'
import ArrowRight from './arrowRight'
import useIsInViewport from './hooks/useInViewport'

function FooterDecoration() {

    const footerDecoRef = useRef<HTMLElement | null>(null)

    const isInViewport = useIsInViewport({ ref: footerDecoRef })
    const [alreadyPutClasses, setAlreadyPutClasses] = useState<boolean>(false)

    useEffect(() => {
        if (isInViewport && !alreadyPutClasses) {
            footerDecoRef.current?.childNodes[0].childNodes.forEach((node) => {
                if (node instanceof Element) {
                    node.classList.add(stylesMain.fadeIn)
                }
            })
            setAlreadyPutClasses(true)
        }
    }, [isInViewport, alreadyPutClasses])

    return (
        <section className={styles.container} ref={footerDecoRef}>
            <div className={styles.innerContainer}>
                <p>Libres de <span>crear por los demás</span>                  </p>
                <i><ArrowRight /></i>
                <p>Libres de <span>crear por los demás</span></p>
                <i><ArrowRight /></i>
            </div>
            <div className={styles.innerContainer}>
                <p>Libres de <span>crear por los demás</span>                  </p>
                <i><ArrowRight /></i>
                <p>Libres de <span>crear por los demás</span></p>
                <i><ArrowRight /></i>
            </div>
        </section>

    )
}

export default FooterDecoration