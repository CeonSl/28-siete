'use client'
import React from 'react'
import styles from '../css/toast.module.css'
import CheckIcon from './checkIcon'

type toastTypes = {
    message: string,
    closeToast: boolean
}

function Toast({ message, closeToast }: toastTypes) {
    return (
        <>
            <div className={`${styles.container} ${message != '' && styles.fadeIn} ${closeToast && styles.fadeOut}`}>
                {message != '' && message == 'Enviando' ?
                    <> <div className={styles.loader}></div><p>{message}</p></>
                    : message != '' &&
                    <><CheckIcon /><p>{message}</p></>
                }
            </div>
        </>
    )
}

export default Toast