import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import Login from '../components/Login/Index';
import HomePage from '../components/HomePage/Index';

import { AuthProvider, AuthContext } from '../Context/auth';

function AppRoutes() {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }
        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/" element={<Private><HomePage /></Private>}></Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;