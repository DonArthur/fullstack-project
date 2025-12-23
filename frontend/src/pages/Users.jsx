import React, { useEffect, useState } from 'react'
import api from '../api/axios'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        api.get('/api/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err))
    }, [])
  return (
    <div>
        <span className='text-3xl font-bold underline'>Users</span>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users