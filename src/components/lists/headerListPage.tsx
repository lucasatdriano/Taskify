import React, { useState } from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import DropdownField from '@/components/layout/dropdownField';
import MenuCreateTask from '@/components/tasks/menuCreateTask';
import { BiSortAlt2 } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';

interface HeaderListPage {
    title: string | null;
}

export default function HeaderListPage({ title }: HeaderListPage) {
    const [openMenuCreateTask, setOpenMenuCreateTask] = useState(false);
    const [isDropdownToggle, setIsDropdownToggle] = useState(false);
    const ListOptions = [
        {
            icon: CiEdit,
            title: 'Editar Título da Lista',
            onDropdownFunction: Nada,
        },
        {
            icon: AiOutlineDelete,
            title: 'Excluir Lista',
            onDropdownFunction: Nada,
        },
        {
            icon: BiSortAlt2,
            title: 'Organizar Tarefas',
            onDropdownFunction: Nada,
        },
    ];

    function Nada() {
        return true;
    }

    return (
        <>
            <MenuCreateTask
                active={openMenuCreateTask}
                closeMenu={() => setOpenMenuCreateTask(!openMenuCreateTask)}
            />
            <header className="flex w-full place-content-center relative">
                <h1 className="font-poppins text-5xl text-center pb-4">
                    {title}
                </h1>
                <div className="absolute right-24 bottom-0 p-3">
                    <div className="w-14 h-14 rounded-full bg-primary border-2 border-fontColor"></div>
                    <div className="absolute inset-0 -right-14 m-auto w-14 h-14 rounded-full bg-secundary border-2 border-fontColor"></div>
                </div>
                <IoEllipsisVerticalSharp
                    onClick={() => setIsDropdownToggle(!isDropdownToggle)}
                    className="absolute right-0 text-6xl hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                />
            </header>
            <hr className="border border-fontColor" />
            <DropdownField
                listItems={ListOptions}
                dropdownToggle={isDropdownToggle}
                setDropdownToggle={setIsDropdownToggle}
            />
        </>
    );
}
