import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const [query, setQuery] = useState("");
    const [filteredNotes, setFilteredNotes] = useState([]);

    return (
        <NoteContext.Provider value={{ query, setQuery, filteredNotes, setFilteredNotes, notes, setNotes, shouldRefresh, setShouldRefresh }}>
            {children}
        </NoteContext.Provider>
    );
};

export const useNotesContext = () => useContext(NoteContext);
