import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useNote } from '../../hooks/useNote'
import ConfirmModal from '../../components/ConfirmModal';

export default function NoteViewMenu({ setIsEditing, noteid }) {

    const { handleDeleteNote } = useNote();
    const [open, setOpen] = useState(false);

    return (
        <>
            <Menu as="div" className="relative inline-block ">
                <div>
                    <MenuButton className="inline-flex w-full text-sm font-semibold">
                        <EllipsisHorizontalIcon aria-hidden="true" className="mr-1 size-7 text-black cursor-pointer" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <div
                                onClick={() => setIsEditing(true)}
                                className="flex items-center px-1 py-2 cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-green-900 data-focus:outline-hidden"
                            >
                                <PencilSquareIcon aria-hidden="true" className="mr-1 size-4 text-gray" />
                                Edit
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div
                                onClick={() => setOpen(true)}
                                className="flex items-center px-1 py-2 cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-red-900 data-focus:outline-hidden"
                            >
                                <TrashIcon aria-hidden="true" className="mr-1 size-4 text-gray" />
                                Delete
                            </div>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>

            <ConfirmModal
                open={open}
                setOpen={setOpen}
                onClick={() => handleDeleteNote(noteid)}
                title={"Delete note"}
                message={"Are you sure u wanna delete this note ?"}
                cancelButton={"Cancel"}
                actionButton={"Delete"}
            />
        </>
    )
}
