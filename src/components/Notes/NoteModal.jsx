import React from 'react'

export default function NoteModal({ note, color }) {
    return (
        <>
            <div className='relative rounded-md max-w-sm min-w-sm min-h-50 p-3' style={{ backgroundColor: note.noteColor }}>
                <div className='flex flex-row justify-between'>
                    <input
                        type="text"
                        className="flex-1 font-bold text-lg"
                        id="title"
                        value={title}
                        onChange={(text) => setTitle(text)}
                        required
                        placeholder="Title"
                    />
                </div>
                <div className='flex-1 border-b-1' />
                <div className='flex-1 mb-10 mt-3'>
                    <input
                        type="text"
                        className="flex-1 font-bold text-lg"
                        id="content"
                        value={content}
                        onChange={(text) => setContent(text)}
                        required
                        placeholder="Write something..."
                    />
                </div>
            </div>
        </>
    )
}
