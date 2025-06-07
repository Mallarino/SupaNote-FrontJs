import React, { use, useEffect, useState } from 'react'
import { getNotes } from '../../services/noteService'
import Spinner from '../../utils/Spinner';
import ConfimrModal from '../ConfirmModal';
import NoteView from '../Notes/NoteView';

export default function NoteArea() {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const notes = await getNotes();
        setNotes(notes);
        console.log(notes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    };
    init();
  }, [])

  return (
    <div className='flex flex-1 flex-wrap gap-10 bg-gray-300 p-4 rounded-tl-lg'>
      <NoteView />
    </div>
  )
}
