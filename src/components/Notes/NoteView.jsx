import React from 'react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

//Componente que mostrará la nota estilo "stickty"
export default function NoteView() {
  return (
    <>
      <div className='relative bg-yellow-200 rounded-md max-w-sm min-h-50 p-3'>
        <div className='flex flex-row justify-between'>
          <div className='flex-1 font-bold text-lg'>Title</div>
          <EllipsisHorizontalIcon aria-hidden="true" className="-mr-1 size-7 text-black cursor-pointer" />
        </div>
        <div className='flex-1 border-b-1' />
        <div className='flex-1 mb-10 mt-3'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, officia! Incidunt cumque saepe magnam, veritatis eveniet ipsa, nesciunt, atque minus nulla libero dolor? Dolorum accusantium earum officiis quasi quia quisquam!</p>
        </div>
        <h3 className='absolute bottom-2'>2025/06/07</h3>
      </div>
    </>
  )
}
