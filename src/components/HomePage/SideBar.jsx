import React, {useState} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/20/solid'
import NoteModal from '../Notes/NoteModal';

export default function SideBar() {

    const colors = ["#3D7F8E", "#CF6565", "#C5B853"];

    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("");

    const onColorSelect = (color) => {
        setColor(color)
        setOpen(true);
    }
    
    return (
        <>
            <div className='w-64 p-4'>
                <Menu as="div" className="relative inline-block text-left top-10 left-9">
                    <div>
                        <MenuButton className="inline-flex w-full gap-x-1.5 rounded-full px-3 py-2 text-sm font-semibold shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer">
                            <PlusIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
                            New Note
                        </MenuButton>
                    </div>
                    <MenuItems
                        transition
                        className="absolute z-10 mt-2 w-full bg-white transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <div className="py-1">
                            <MenuItem>
                                <div className='flex flex-col items-center'>
                                    {colors.map((color) => (
                                        <div
                                            key={color}
                                            onClick={() => onColorSelect(color)}
                                            className="w-[30px] h-[30px] m-[5px] rounded-full cursor-pointer"
                                            style={{ backgroundColor: color }} />
                                    ))}
                                </div>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </div>
            <NoteModal color={color} open={open} setOpen={setOpen}  />
        </>
    )
}
