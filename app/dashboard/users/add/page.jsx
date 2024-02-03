"use client"
import { addUser } from "../../../lib/actions"
import Select from 'react-select'
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css"
import "../../../ui/dashboard/users/addUser/custom-select.css"
import { useState } from 'react'

const options = [
    {value: false, label: "No" },
    {value: true, label: "Yes"}
]

const AddUserPage = () => {
    const [adminValue, setAdminValue] = useState(null)
    const [activeValue, setActiveValue] = useState(null)

    const adminOnChange = (newValue) => {
        setAdminValue(newValue)
    }

    const activeOnChange = (newValue) => {
        setActiveValue(newValue)
    }

    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="username" name="username" required/>
                <input type="email" placeholder="email" name="email"  required/>
                <input type="password" placeholder="password" name="password" required/>
                <input type="phone" placeholder="phone" name="phone" />
                <div className='select-wrap'>
                    <Select classNamePrefix='custom-select' name="isAdmin" id="isAdmin" onChange={adminOnChange} value={adminValue} options={options} placeholder="Is admin ?" />
                </div>
                <div className='select-wrap'>
                    <Select classNamePrefix='custom-select' name="isActive" id="isActive" onChange={activeOnChange} value={activeValue} options={options} placeholder="Is active ?" />
                </div>
                <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage