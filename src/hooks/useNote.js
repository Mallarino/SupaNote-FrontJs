import { use, useState, useEffect } from "react";
import { createNote, deleteNote, getNotes, updateNote } from "../services/noteService";
import { useNavigate } from "react-router-dom";
import { useNotesContext } from '../context/NoteContext';
import { toast } from "react-toastify";

export function useNote() {

    const { query, setFilteredNotes, notes, setNotes, shouldRefresh, setShouldRefresh } = useNotesContext();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [noteColor, setNoteColor] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                setLoading(true);
                const notes = await getNotes();
                setNotes(notes);
                setShouldRefresh(false)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false);
            }

        };
        init();
        filteredNotes();
    }, [shouldRefresh])

    useEffect(() => {
        filteredNotes();
    }, [query])


    const getFilteredNotes = (query, items) => {
        if (!query) {
            return items;
        }

        return items.filter(note =>
            note.title.toLowerCase().includes(query.toLowerCase())
        );
    };

    const filteredNotes = () => {
        const filterResult = getFilteredNotes(query, notes);
        setFilteredNotes(filterResult);
    }

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

    const handleUpdateNote = async (noteid) => {
        try {
            const updatedNote = { noteColor, title, content }
            await updateNote(noteid, updatedNote);
            setShouldRefresh(true);
            clearModal();
            toast.success("Note updated");
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
        handleUpdateNote,
        handleDeleteNote,
        filteredNotes,
        loading,
        title,
        setTitle,
        content,
        setContent,
        noteColor,
        setNoteColor
    }

}