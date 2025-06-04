import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./Components/RequireAuth";
import useLocalStorage from "use-local-storage";

export default function App() {
    const [token, setToken] = useLocalStorage("token", null);
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    } />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>

    );
}