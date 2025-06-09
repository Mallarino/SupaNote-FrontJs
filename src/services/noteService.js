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

export const createNote = async (note) => {
    const token = getToken();
    try {
        const response = await axios.post(`${API_URL}`, note, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = response.data;
        return data;

    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error creating note"
        throw new Error(errorMessage)
    }
}

export const updateNote = async (noteId, note) => {
    const token = getToken();
    try {
        const response = await axios.post(`${API_URL}/${noteId}`, note, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = response.data;
        return data;

    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error updating note"
        console.error("Error al crear nota:", errorMessage);
        throw new Error(errorMessage)
    }
};

export const deleteNote = async (noteId) => {
    const token = getToken();
    try {
        await axios.delete(`${API_URL}/${noteId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        const errorMessage =
      error.response?.data?.message || "Error deleting note";
    throw new Error(errorMessage);
    }

};

