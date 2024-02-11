import React from 'react'
import styles from '../css/navBar.module.css'

function NavBar() {
    return (
        <ul className={styles.containerItems}>
            <li><a href="#Filosofia">Filosofía</a></li>
            <li><a href="#Servicios">Servicios</a></li>
            <li><a href="#Proyectos">Proyectos</a></li>
            <li><a href="#Contacto">Contacto</a></li>
        </ul>
    )
}

export default NavBar