import React, { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Textarea } from '@headlessui/react'
import { useNote } from '../../hooks/useNote'
import { toast } from 'react-toastify';


export default function NoteModal({ color, open, setOpen }) {

    const { clearModal, handleNewNote, title, setTitle, content, setContent, setNoteColor } = useNote();

    useEffect(() => {
        setNoteColor(color);
    }, [color])

    useEffect(() => {
        if (title.length == 100) {
            toast.info("Title max leght reached!")
        }
    }, [title])

    const onCreate = () =>{
        setOpen(false);
        handleNewNote();
    }


    return (
        <>
            <div>
                <Dialog open={open} onClose={setOpen} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                            >
                                <div className='relative rounded-md min-w-sm min-h-50 p-3' style={{ backgroundColor: color }}>
                                    <div className='flex flex-row justify-between'>
                                        <Textarea
                                            type="text"
                                            className="flex-1 font-bold text-lg focus:outline-none focus:ring-0"
                                            id="title"
                                            value={title}
                                            maxLength={100}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Title"
                                            rows={1}
                                        />
                                    </div>
                                    <div className='flex-1 border-b-1' />
                                    <div className='flex flex-wrap gap-4 flex-1 mb-10 mt-3'>
                                        <Textarea
                                            type="text"
                                            className="flex-1 text-lg focus:outline-none focus:ring-0"
                                            id="content"
                                            value={content}
                                            maxLength={100}
                                            onChange={(e) => setContent(e.target.value)}
                                            placeholder="Write something..."
                                            rows={4}
                                        />
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" style={{ backgroundColor: color }}>
                                        <button
                                            type="button"
                                            onClick={() => onCreate()}
                                            className="inline-flex w-full cursor-pointer justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 sm:ml-3 sm:w-auto"
                                        >
                                            Create
                                        </button>
                                        <button
                                            type="button"
                                            data-autofocus
                                            onClick={() => { clearModal(), setOpen(false) }}
                                            className="mt-3 inline-flex w-full cursor-pointer justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </div>
        </>
    )
}
