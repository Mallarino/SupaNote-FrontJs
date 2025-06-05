import axios from "axios";

const API_URL = "http://localhost:8080/auth"

export const login = async (credentials) => {

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })

        const data = await response.json();
        localStorage.setItem("token", data.token)
        return data;

    } catch (error) {
        console.error(error)
    }

}

export const register = async (credentials) => {

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })

        const data = await response.json();
        localStorage.setItem("token", data.token)
        localStorage.setItem("User", JSON.stringify(response.user))
        return data;

    } catch (error) {
        console.error(error)
    }

}


export const logout = () => {
    localStorage.removeItem("token");
};

export const getToken = () => {
    return localStorage.getItem("token");
};