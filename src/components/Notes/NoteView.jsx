import React, { useState } from 'react'
import { EllipsisHorizontalIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { formatDate } from '../../utils/FormatDate'
import NoteViewMenu from '../../utils/Menus/NoteViewMenu'

//Componente que mostrará la nota estilo "stickty", donde se podra editar y eliminar
export default function NoteView({ note }) {

  const [pressEdit, setPressEdit] = useState(false);
  

  return (
    <>
      <div className='relative rounded-md max-w-sm min-w-sm min-h-50 p-3' style={{ backgroundColor: note.noteColor }}>

        <div className='flex flex-row justify-between'>
          <input disabled={!pressEdit} value={note.title} className='flex-1 font-bold text-lg' />
          {!pressEdit && <NoteViewMenu setIsEditing={setPressEdit}/>}
        </div>

        <div className='flex-1 border-b-1' />

        <div className='flex-1 mb-10 mt-3'>
          <input className='w-full' disabled={!pressEdit} value={note.content} />
        </div>

        <h2 className='absolute bottom-2'>08/06/2025</h2>

        {pressEdit && 
        (<div className='absolute bottom-2 right-2 flex mx-3'>
          <XMarkIcon aria-hidden="true" className="mr-4 size-6 text-black" onClick={() => setPressEdit(false)}/>
          <CheckCircleIcon aria-hidden="true" className="size-6 text-black" onClick={() => console.log("llamamos a update note")}/>
        </div>)
        }

      </div>
    </>
  )
}
