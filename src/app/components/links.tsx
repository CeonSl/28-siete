'use client'
import React, { useEffect, useRef } from 'react'
import styles from '../css/links.module.css'
import IconArrowRightShort from './arrowRightBold'
import useIsInViewport from './hooks/useInViewport'
import stylesMain from '../page.module.css'

type linksTypes = {
    id: string,
    title: string,
    children: React.ReactNode | React.ReactNode[]
}

function Links({ id, title, children }: linksTypes) {

    const refLink = useRef<HTMLElement | null>(null)

    const isInViewport = useIsInViewport({
        ref: refLink
    })

    useEffect(() => {
        if (isInViewport) {
            refLink.current?.childNodes.forEach((node) => {
                if (node instanceof Element) {
                    node.classList.add(stylesMain.fadeIn)
                }
            })
        }
    }, [isInViewport])

    return (
        <section id={id} className={styles.container} ref={refLink}>
            <p className={styles.title}>{title} <IconArrowRightShort /></p>
            <aside className={styles.paragraphs}>
                {children}
            </aside>
        </section>
    )
}

export default Links