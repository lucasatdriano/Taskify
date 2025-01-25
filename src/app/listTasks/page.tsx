'use client';
import DropdownField from '@/components/dropdownField';
import { useState } from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { BiSortAlt2 } from 'react-icons/bi';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import CardTasks from '@/components/cardTasks';
import ButtonCreateTask from '@/components/buttonCreateTask';
import MenuCreateTask from '@/components/menuCreateTask';

export default function ListTasks() {
    const [isDropdownToggle, setIsDropdownToggle] = useState(false);
    const [openMenuCreateTask, setOpenMenuCreateTask] = useState(false);
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
        <div className="max-h-svh w-full p-10">
            <MenuCreateTask
                active={openMenuCreateTask}
                closeMenu={() => setOpenMenuCreateTask(!openMenuCreateTask)}
            />
            <header className="flex w-full place-content-center relative">
                <h1 className="font-poppins text-5xl text-center pb-4">
                    Leitura
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
            />
            <main className="w-full h-full py-6  flex flex-col justify-between">
                <div className="h-5/6 ">
                    <div className="max-h-96 grid gap-4 px-10 overflow-y-auto">
                        <CardTasks />
                        <CardTasks />
                    </div>
                    <div className="relative">
                        <h2 className="w-fit bg-background p-2 ml-5 relative text-xl">
                            Concluídas
                        </h2>
                        <hr className="border border-fontColor absolute w-full top-1/2 -z-10" />
                    </div>
                    <div className="max-h-80 grid gap-4 px-10 overflow-y-auto">
                        <CardTasks />
                    </div>
                </div>
                <ButtonCreateTask
                    closeMenuCreateTask={() => setOpenMenuCreateTask(false)}
                />
            </main>
        </div>
    );
}
