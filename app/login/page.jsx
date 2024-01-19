import styles from "../ui/login/login.module.css"

const LoginPage = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password"/>
                <button>Login</button>
            </div>
        </div>
    )
}

export default LoginPage