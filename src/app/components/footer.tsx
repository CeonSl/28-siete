'use client'
import React from 'react'
import styles from '../css/footer.module.css'

function Footer() {
    const toPageTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer className={styles.container}>
            <ul>
                <li>
                    <p>Explorar nuestro perfil en <a href="https://www.linkedin.com/company/28-siete/" target='_blank'>Linkedin</a> y síguenos en <a href="https://www.facebook.com/veintiochosiete" target='_blank'>Facebook</a>, <a href="https://www.instagram.com/28siete/" target='_blank'>Instagram</a>, <a href="https://www.behance.net/28siete" target='_blank'>Behance</a>.</p>
                    <p>© 2024 28Siete. Todos los derechos reservados.</p>
                </li>
                <li>
                    <p><span>28Siete</span>Av. Primavera 543, San Borja 15037, Lima - Perú.</p>
                    <div>
                        <p>
                            Para consultas:
                        </p>
                        <p>
                            e.cuentas@agencia28.com
                        </p>
                        <p>
                            +51 (01)  763 58 89
                        </p>
                    </div>

                </li>
                <li><button onClick={() => toPageTop()}>Page top</button></li>
            </ul>
        </footer>
    )
}

export default Footer