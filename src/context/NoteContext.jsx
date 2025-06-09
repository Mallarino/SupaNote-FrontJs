import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(true);

    return (
        <NoteContext.Provider value={{ notes, setNotes, shouldRefresh, setShouldRefresh }}>
            {children}
        </NoteContext.Provider>
    );
};

export const useNotesContext = () => useContext(NoteContext);
