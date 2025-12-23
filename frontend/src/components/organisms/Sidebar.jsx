import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Users', link: '/users' },
        { name: 'Settings', link: '/settings' },
    ]

    return (
        <div className="w-50 bg-gray-800 text-white p-4 hidden md:block">
        <ul>
            {menuItems.map((item, index) => (
                <li key={index} className="mb-2">
                    <NavLink
                        to={item.link}
                        className={({ isActive }) => `block px-3 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700 font-bold' : ''}`}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default Sidebar