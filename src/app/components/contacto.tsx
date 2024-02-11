'use client'
import React, { FormEvent, useState } from 'react'
import ArrowRight from './arrowRight'
import Toast from './toast'
function Contacto() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [messageToSend, setMessageToSend] = useState<string>("")
    const [messageToToast, setMessageToToast] = useState<string>("")
    const [closeToast, setCloseToast] = useState<boolean>(false)
    const password = process.env.NEXT_PUBLIC_SMTPJS_PASSWORD;

    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "e.cuentas@agencia28.com",
            Password: password!,
            To: "e.cuentas@agencia28.com",
            From: "e.cuentas@agencia28.com",
            Subject: `Mensaje de ${name}`,
            Body: messageToSend + ` - correo de contacto: ${email}`,
        })
            .then(() => {
                setMessageToToast('Enviando')
            })
            .then(() => {
                setTimeout(() => {
                    setMessageToToast('Enviado correctamente')
                }, 1000);

                setTimeout(() => {
                    setCloseToast(true)
                }, 5000);
                setCloseToast(false)
            });

        setName("")
        setEmail("")
        setMessageToSend("")
        return true;
    }
    return (
        <>
            <Toast message={messageToToast} closeToast={closeToast} />
            <form action="" onSubmit={(e) => sendEmail(e)}>
                <label htmlFor="name">Nombre <ArrowRight /></label>
                <input type="text" name='name' id='name' onChange={(e) => setName(e.target.value)} value={name} required />
                <label htmlFor="email">Correo electrónico <ArrowRight /></label>
                <input type="email" name='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                <label htmlFor="message">Describe cuál es tu producto o servicio <ArrowRight /></label>
                <input type="text" name='message' id='message' onChange={(e) => setMessageToSend(e.target.value)} value={messageToSend} required />
                <button type="submit">ENVIAR</button>
            </form>
        </>
    )
}
export default Contacto