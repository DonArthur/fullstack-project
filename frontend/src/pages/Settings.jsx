import { useEffect, useState } from 'react'
import api from '../api/axios'
import Button from '../components/atoms/Button'

const Settings = () => {
  const [profile, setProfile] = useState(null)
  const [form, setForm] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  useEffect(() => {
    if (!profile) {
      api.get('/api/users/profile')
        .then(res => {
          setProfile(res.data)
          setForm(res.data)
        })
        .catch(err => console.error(err))
    }
  }, [profile])

  return (
    <div>
      <span className='text-xl font-semibold'>Settings</span>
      <div className='my-3 p-4 bg-white shadow rounded whitespace-pre-wrap break-all'>
        <div className='text-gray-800'>
          {profile && form ? <form onSubmit={submit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded" />
            <label htmlFor="phoneNum">Phone Number</label>
            <input id="phoneNum" type="tel" value={form.phoneNum} onChange={(e) => setForm({ ...form, phoneNum: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded" />
            <label htmlFor="role">Role</label>
            <select id="role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
            <Button variant='primary'>Save Changes</Button>
          </form> : 'Loading...'}
        </div>
      </div>
    </div>
  )
}

export default Settings