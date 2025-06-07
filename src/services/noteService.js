import axios from "axios";
import { getToken } from "./authService";

const API_URL = "http://localhost:8080/api/notes"

export const getNotes = async () => {
    const token = getToken();
    try {
        const response = await axios.get(`${API_URL}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        });

        const data = response.data;
        return data;
    } catch (error) {
        // Axios guarda el mensaje del backend en error.response.data
        const errorMessage =
            error.response?.data?.message || "Error loading notes";
        throw new Error(errorMessage);
    }
};

