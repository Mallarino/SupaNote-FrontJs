import React, { useEffect, useState } from 'react'
import { getNotes } from '../../services/noteService'
import Spinner from '../../utils/Spinner';
import NoteView from '../Notes/NoteView';
import { toast } from 'react-toastify';
import NoteModal from '../Notes/NoteModal';
import { useNotesContext } from '../../context/NoteContext';
import { useNote } from '../../hooks/useNote';

export default function NoteArea() {

  const { filteredNotes } = useNotesContext();
  const { loading } = useNote();

  return (
    <div className='flex flex-1 flex-wrap gap-10 bg-gray-300 p-4 rounded-tl-lg items-center justify-center'>
      {loading ? (
        <Spinner />
      ) : filteredNotes.length > 0 ? (
        filteredNotes.map(note => <NoteView key={note.id} note={note} />)
      ) : (
        <p className='font-bold'>You don't have notes. yet.</p>
      )}
    </div>
  )
}
