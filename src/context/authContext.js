import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );

    const login = async ({ userName, pwd }) => {
        const response = await fetch("http://localhost:3500/api/auth/SignIn", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_name: userName, user_password: pwd })
        })
        if (!response.ok) {
            const data = await response.json();
            throw data?.message || "unrecognized error";
        }
        else {
            if (response.ok) {
                const data = await response.json();
                const token = data.accessToken;
                const user = data.user;
                setToken(token);
                setCurrentUser(user);
            }
        }
    }

    const logout = () => {
        setCurrentUser(null);
        setToken(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    return (
        <AuthContext.Provider value={{ currentUser, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}