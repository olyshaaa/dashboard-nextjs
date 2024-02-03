"use client"
import {addProduct} from "../../../lib/actions"
import Select from "react-select"
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css"
import "./custom-select.css"
import { useState } from 'react'

const options = [
    {value: "kitchen", label: "kitchen"},
    {value: "computer", label: "computer"},
    {value: "phone", label: "phone"},
    {value: "furniture", label: "furniture"},
    {value: "books", label: "books"}
]

const AddProductPage = () => {
    const [currentValue, setCurrentValue] = useState('')

    const getValue = () => {
        return currentValue ? options.find(c => c.value === currentValue) : ''
    }

    const onChange = (newValue) => {
        setCurrentValue(newValue.value)
    }
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="title" name="title" required/>
                <div className='select-wrap'>
                <Select classNamePrefix='custom-select' name='category' id='category' onChange={onChange} value={getValue()} options={options} placeholder="Choose a category" />
                </div>
                <input type="number" placeholder="price" name="price"/>
                <input type="number" placeholder="stock" name="stock"/>
                <input type="text" placeholder="size" name="size"/>
                <input type="text" placeholder="color" name="color"/>
                <textarea name="description" id="desc" rows="16" placeholder="Description"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProductPage