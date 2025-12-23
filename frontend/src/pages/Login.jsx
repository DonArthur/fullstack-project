import { useState } from "react";
import { login as loginApi } from "../api/auth";
import { useAuth } from "../context/useAuth";

export default function Login() {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        const res = await loginApi({ email, password })
        login(res.data.token)
    }

    return (
        <form onSubmit={submit}>
            <h2>Login</h2>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    )
}