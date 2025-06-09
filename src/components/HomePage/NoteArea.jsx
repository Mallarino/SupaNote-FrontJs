import React, { use, useEffect, useState } from 'react'
import { getNotes } from '../../services/noteService'
import Spinner from '../../utils/Spinner';
import NoteView from '../Notes/NoteView';
import { toast } from 'react-toastify';
import NoteModal from '../Notes/NoteModal';
import { useNotesContext } from '../../context/NoteContext';

export default function NoteArea() {

  const {notes, setNotes, shouldRefresh, setShouldRefresh} = useNotesContext();
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
  }, [shouldRefresh])
  
  return (
    <div className='flex flex-1 flex-wrap gap-10 bg-gray-300 p-4 rounded-tl-lg items-center justify-center'>
      {loading ? <Spinner /> : (notes?.map((note) => (
          <NoteView key={note.id} note={note} />
      )))}

    </div>
  )
}
