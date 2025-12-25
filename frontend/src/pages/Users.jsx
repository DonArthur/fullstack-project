import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import DataTable from '../components/molecules/DataTable'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        api.get('/api/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err))
    }, [])
  return (
    <div>
        <span className='text-xl font-semibold'>Users</span>
        <div className='my-3 p-4 bg-white shadow rounded overflow-x-auto'>
            <DataTable columnsArr={['Name', 'Email', 'Role']} data={users} />
        </div>
    </div>
  )
}

export default Users