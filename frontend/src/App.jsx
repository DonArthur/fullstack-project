import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Users from "./pages/Users";
import { useAuth } from "./context/useAuth";

const RootRedirect = () => {
  const { token } = useAuth()
  return token ? <Navigate to="/users" /> : <Navigate to="/login" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<ProtectedRoute>
          <Users />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}