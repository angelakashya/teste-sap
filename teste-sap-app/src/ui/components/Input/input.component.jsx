import React from 'react'
import './input.style.css'

export function Input({ name, placeholder, handleChange, value, type, required }) {
  function onChange(event) {
    handleChange(event.target.value)
  }

  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      required={required}
    />
  )
}
