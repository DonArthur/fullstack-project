import React from 'react'

const Input = ({ type = "text", placeholder, onChange, value, id }) => {
  return (
    <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200'
    />
  )
}

export default Input