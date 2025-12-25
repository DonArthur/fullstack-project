import { useState } from "react"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        localStorage.getItem('token')
    )
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    )

    const login = (jwt, userDetails) => {
        localStorage.setItem('token', jwt)
        localStorage.setItem('user', JSON.stringify(userDetails))
        setToken(jwt)
        setUser(userDetails)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ token, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}