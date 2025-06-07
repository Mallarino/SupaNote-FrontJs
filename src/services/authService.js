import axios from "axios";

const API_URL = "http://localhost:8080/auth"

export const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        //si la respuesta no es 200ok
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al iniciar sesión");
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("User", JSON.stringify(data.user))
        return data;
    } catch (error) {
        console.error("Error en login:", error.message);
        throw error;
    }
};

export const register = async (credentials) => {

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al crear cuenta")
        }

        const data = await response.json();
        localStorage.setItem("token", data.token)
        localStorage.setItem("User", JSON.stringify(data.user))

    } catch (error) {
        console.error("Error al crear cuenta:", error.message);
        throw error
    }

}


export const logout = () => {
    localStorage.removeItem("token");
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getUserName = () => {
    const user = JSON.parse(localStorage.getItem("User"));
    return user.username
}