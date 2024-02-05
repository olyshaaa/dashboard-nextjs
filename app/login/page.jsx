"use client"
import { useState } from 'react'
import styles from "../ui/login/login.module.css"
import LoginForm from "../ui/login/loginForm/loginForm"
import Modal from "./modal"

const LoginPage = () =>{
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    return (
        <div className={styles.container}>
            <a onClick={()=>setShowModal(true)}>show login details(click)</a>
            <LoginForm />
            <Modal active={showModal} closeModal={closeModal} />
        </div>
    )
}

export default LoginPage