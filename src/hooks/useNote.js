import { use, useState } from "react";
import { createNote, deleteNote, getNotes } from "../services/noteService";
import { useNavigate } from "react-router-dom";
import { useNotesContext } from '../context/NoteContext';
import { toast } from "react-toastify";

export function useNote() {
    const navigate = useNavigate();

    const {notes, setNotes, setShouldRefresh} = useNotesContext();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [noteColor, setNoteColor] = useState("");

    const clearModal = () => {
        setTitle("");
        setContent("");
    }

    const handleNewNote = async () => {
        try {
            const newNote = { noteColor, title, content }
            await createNote(newNote);
            setShouldRefresh(true);
            clearModal();
            toast.success("Note created");
        } catch (error) {
            toast.error(error.message)
        }

    }

    const handleDeleteNote = async (noteid) => {
        try {
            await deleteNote(noteid);
            toast.success("Note deleted");
            clearModal();
            setShouldRefresh(true);
        } catch (error) {
            toast.error(error.message)
        }

    }


    return {
        clearModal,
        handleNewNote,
        handleDeleteNote,
        title,
        setTitle,
        content,
        setContent,
        noteColor,
        setNoteColor
    }

}