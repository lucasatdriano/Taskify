'use client';
import DropdownField from '@/components/dropdownField';
import { useState } from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { BiSortAlt2 } from 'react-icons/bi';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import CardTasks from '@/components/cardTasks';

export default function ListTasks() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const ListOptions = [
        { icon: CiEdit, title: 'Editar Título da Lista', isFunction: Nada() },
        { icon: AiOutlineDelete, title: 'Excluir Lista', isFunction: Nada() },
        {
            icon: BiSortAlt2,
            title: 'Organizar Tarefas',
            isFunction: Nada(),
        },
    ];

    function Nada() {
        return true;
    }

    return (
        <div className=" w-full p-10">
            <header className="flex w-full place-content-center relative">
                <h1 className="font-poppins text-5xl text-center pb-4">
                    Leitura
                </h1>
                <div className="absolute right-24 bottom-0 p-3">
                    <div className="w-14 h-14 rounded-full bg-primary border-2 border-fontColor"></div>
                    <div className="absolute inset-0 -right-14 m-auto w-14 h-14 rounded-full bg-secundary border-2 border-fontColor"></div>
                </div>
                <IoEllipsisVerticalSharp
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="absolute right-0 text-6xl hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                />
            </header>
            <hr className="border-1 border-fontColor" />
            <DropdownField listItems={ListOptions} active={openDropdown} />
            <main className="w-full p-6">
                <CardTasks />
            </main>
        </div>
    );
}
