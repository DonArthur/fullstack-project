import React from 'react'
import { useAuth } from '../context/useAuth'

const Navbar = () => {
    const { token, logout } = useAuth()

    return (
        <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
            <div className='font-bold text-lg'>My App</div>
            {
                token && (
                    <button
                        onClick={logout}
                        className='bg-red-500 px-4 py-2 rounded hover:bg-red-600'
                    >
                        Logout
                    </button>)
            }
        </nav>
    )
}

export default Navbar