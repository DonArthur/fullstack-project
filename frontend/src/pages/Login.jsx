import { useState } from "react";
import { login as loginApi } from "../api/auth";
import { useAuth } from "../context/useAuth";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

export default function Login() {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        const res = await loginApi({ email, password })
        login(res.data.token)
        window.location.href = '/users'
    }

    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-900">
            <form onSubmit={submit} className="bg-rose-700 text-white py-6 px-12 rounded shadow-md flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-6 text-center">Login</h2>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password" className="block mb-2">Password</label>
                <Input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={submit}>Login</Button>
            </form>
        </div>
    )
}