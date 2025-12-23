import React from 'react'

const Button = ({ children, onClick, type = "button", variant = "primary", disabled = false }) => {
    const base = 'cursor-pointer px-4 py-2 rounded text-white border-none focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200'
    const disabledClass = 'disabled:bg-gray-400 disabled:cursor-not-allowed'
    const styles = {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-blue-300 hover:bg-blue-400',
        danger: 'bg-red-500 hover:bg-red-600',
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${disabled ? disabledClass : ''} ${styles[variant]}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button