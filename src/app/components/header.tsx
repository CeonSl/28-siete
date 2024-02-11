'use client'
import React from 'react'
import styles from '@/app/css/header.module.css'
import mainStyles from '@/app/page.module.css'
import Image from 'next/image'
import Logo28Siete from '../../../public/images/28SieteLogo.webp'

function Header() {
    const removeBackgroundWhite = () => {
        const divPageLoader = document.getElementById("pageLoader")
        if (divPageLoader) {
            divPageLoader.classList.add(mainStyles.removeBackgroundWhite)
        }
    }
    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <Image src={Logo28Siete} title='Logo 28Siete' alt='Logo 28Siete' width={190} height={75} unoptimized onLoad={() => { removeBackgroundWhite() }} />
                <p>
                    Libres de crear por los demás.
                </p>
            </nav>
        </header>
    )
}

export default Header