import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { setNavigateFunction } from "./helpers/navigate";

export default function ProtectedRoute({ children }) {
    const { token } = useAuth()
    const navigate = useNavigate();
    setNavigateFunction(navigate);
    return token ? children : <Navigate to="/login" />
}