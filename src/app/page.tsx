'use client';

import { useState } from 'react';
import DropdownField from '@/components/dropdownField';
import { BiSortAlt2 } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import { CiClock2, CiEdit } from 'react-icons/ci';
import { BsSortAlphaDownAlt, BsSortAlphaDown } from 'react-icons/bs';
import ModalCreateList from '@/components/modalCreateList';

export default function Home() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const sortsOptions = [
        { icon: CiEdit, title: 'Personalizado', isFunction: Nada() },
        { icon: CiClock2, title: 'Data de Criação', isFunction: Nada() },
        { icon: BsSortAlphaDown, title: 'A-Z', isFunction: Nada() },
        { icon: BsSortAlphaDownAlt, title: 'Z-A', isFunction: Nada() },
    ];

    function Nada() {
        return true;
    }

    return (
        <div className=" w-full p-10">
            <header className="flex w-full place-content-center relative">
                <h1 className="font-poppins text-5xl text-center pb-4">
                    Taskify
                </h1>
                <BiSortAlt2
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="absolute right-0 text-6xl cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                />
            </header>
            <hr className="border-1 border-fontColor" />
            <DropdownField listItems={sortsOptions} active={openDropdown} />
            <main className="grid grid-cols-6 gap-5 w-full p-6 place-items-center font-montserrat">
                <div
                    onClick={() => setOpenModal(!openModal)}
                    title="Criar Nova Lista"
                    className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-6xl shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100"
                >
                    <IoAddOutline />
                </div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100">
                    Filmes
                </div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md">
                    Lista de Compras
                </div>
            </main>
            <ModalCreateList
                active={openModal}
                closeModal={() => setOpenModal(!openModal)}
            />
        </div>
    );
}
