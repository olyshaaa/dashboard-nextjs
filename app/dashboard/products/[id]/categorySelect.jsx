"use client"
import { useState } from 'react'
import Select from "react-select"

import "./custom-select.css"

const options = [
    {value: "kitchen", label: "kitchen"},
    {value: "computer", label: "computer"},
    {value: "phone", label: "phone"},
    {value: "furniture", label: "furniture"},
    {value: "books", label: ""}
]

 const CategorySelect = () => {
	const [currentValue, setCurrentValue] = useState('')

	const getValue = () => {
		return currentValue ? options.find(c => c.value === currentValue) : ''
	}

	const onChange = (newValue) => {
		setCurrentValue(newValue.value)
	}
  return (
	<div className='select-wrap'>
		<Select classNamePrefix='custom-select' name="cat" id="category" onChange={onChange} value={getValue()} options={options} placeholder="Choose a category"/>
	</div>
  )
}

export default CategorySelect
