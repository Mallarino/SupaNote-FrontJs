import React, { useState, useRef, useEffect } from 'react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { formatDate } from '../../utils/FormatDate'
import NoteViewMenu from '../../utils/Menus/NoteViewMenu'
import { Textarea } from '@headlessui/react';
import { useNote } from '../../hooks/useNote';

//Componente que mostrará la nota estilo "stickty", donde se podra editar y eliminar
export default function NoteView({ note }) {

  const textareaRef = useRef(null);
  const titleRef = useRef(null);

  const [pressEdit, setPressEdit] = useState(false);

  const { noteColor, setNoteColor, title, setTitle, content, setContent, handleUpdateNote } = useNote();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; 
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
    if (titleRef.current) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = titleRef.current.scrollHeight + 'px';
    }
  }, [content]); 

  useEffect(() => {
    setNoteColor(note.noteColor);
    setTitle(note.title);
    setContent(note.content);
  }, []);

  return (
    <>
      <div className='relative rounded-md max-w-sm min-w-sm min-h-50 p-3' style={{ backgroundColor: noteColor }}>

        <div className='flex flex-row justify-between'>
          <Textarea
            ref={titleRef}
            maxLength={100}
            disabled={!pressEdit}
            value={!pressEdit ? note.title : title}
            onChange={(e) => setTitle(e.target.value)}
            className='flex-1 font-bold text-lg resize-none'
          />
          {!pressEdit && <NoteViewMenu setIsEditing={setPressEdit} noteid={note.id} />}
        </div>

        <div className='flex-1 border-b-1' />

        <div className='flex-1 mb-10 mt-3'>
          <Textarea
            ref={textareaRef}
            className='w-full resize-none'
            disabled={!pressEdit}
            value={!pressEdit ? note.content : content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <h2 className='absolute bottom-2'>{formatDate(note.createdAt)}</h2>

        {pressEdit &&
          (<div className='absolute bottom-2 right-2 flex mx-3'>
            <XMarkIcon aria-hidden="true" className="mr-4 size-6 text-black" onClick={() => setPressEdit(false)} />
            <CheckCircleIcon aria-hidden="true" className="size-6 text-black" onClick={() => handleUpdateNote(note.id)} />
          </div>)
        }

      </div>
    </>
  )
}
