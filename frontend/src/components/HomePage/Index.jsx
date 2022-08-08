import React, { useEffect, useContext } from "react";

import { AuthContext } from "../../Context/auth";

import { getUsers } from "../../services/api";

function HomePage() {
    const { authenticated, logout } = useContext(AuthContext);
    
    useEffect(() => {
        () 
    }, []);

    const handleLogout = () => {
        logout();
    }
    
    return (
        <>
        <h1>Home page</h1>
        <p>{String(authenticated)}</p>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default HomePage;