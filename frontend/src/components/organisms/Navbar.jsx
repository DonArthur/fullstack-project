import React from 'react'
import { useAuth } from '../../context/useAuth'
import Button from '../atoms/Button'

const Navbar = () => {
    const { token, logout, user } = useAuth()

    return (
        <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
            <div className='font-bold text-lg'>My App</div>
            {
                token && (
                    <div>
                        <span className='mr-2'>Hi, {user?.name}</span>
                        <Button
                            onClick={logout}
                            variant="danger"
                        >
                            Logout
                        </Button>
                    </div>)
            }
        </nav>
    )
}

export default Navbar