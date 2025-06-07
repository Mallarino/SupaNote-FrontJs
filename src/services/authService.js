import axios from "axios";

const API_URL = "http://localhost:8080/auth"

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;

    localStorage.setItem("token", data.token);
    localStorage.setItem("User", JSON.stringify(data.user));

    return data;
  } catch (error) {
    // Axios guarda el mensaje del backend en error.response.data
    const errorMessage =
      error.response?.data?.message || "Error al iniciar sesión";
    console.error("Error en login:", errorMessage);
    throw new Error(errorMessage);
  }
};

export const register = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/register`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;

    localStorage.setItem("token", data.token);
    localStorage.setItem("User", JSON.stringify(data.user));

    return data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error al crear cuenta";
    console.error("Error al crear cuenta:", errorMessage);
    throw new Error(errorMessage);
  }
};


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