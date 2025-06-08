import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'

export default function NavbarMenu({ setOpen }) {
    return (
        <Menu as="div" className="relative inline-block ">
            <div>
                <MenuButton className="inline-flex w-full text-sm font-semibold hover:bg-gray-50">
                    <Bars3Icon aria-hidden="true" className="-mr-1 size-7 text-black cursor-pointer" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <div
                            onClick={() => setOpen(true)}
                            className="block px-4 py-2 cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Logout
                        </div>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}
