import React from 'react'
import styles from '../css/toast.module.css'
function CheckIcon() {
    return (
        <svg
            width="25px"
            height="25px"
            viewBox="0 0 133 133"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                className={styles.checkGroup}
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <circle
                    id="filled-circle"
                    fill="#FFFFFF"
                    cx="66.5"
                    cy="66.5"
                    r="54.5"
                />
                <circle
                    className={styles.whiteCircle}
                    fill="#FFFFFF"
                    cx="66.5"
                    cy="66.5"
                    r="55.5"
                />
                <circle
                    className={styles.outline}
                    stroke="#000000"
                    strokeWidth="4"
                    cx="66.5"
                    cy="66.5"
                    r="54.5"
                />
                <polyline
                    id="check"
                    stroke="#000000"
                    strokeWidth="10.5"
                    points="41 70 56 85 92 49"
                />
            </g>
        </svg>
    )
}
export default CheckIcon