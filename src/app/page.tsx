'use client';

import { useState } from 'react';
import DropdownField from '@/components/dropdownField';
import { BiSortAlt2 } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import { CiClock2, CiEdit } from 'react-icons/ci';
import {
    BsSortAlphaDownAlt,
    BsSortAlphaDown,
    BsPinAngle,
    BsPinAngleFill,
} from 'react-icons/bs';
import ModalCreateList from '@/components/modalCreateList';

export default function Home() {
    const [isDropdownToggle, setIsDropdownToggle] = useState(false);
    const [isModalToggle, setIsModalToggle] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const sortsOptions = [
        { icon: CiEdit, title: 'Personalizado', onDropdownFunction: Nada },
        { icon: CiClock2, title: 'Data de Criação', onDropdownFunction: Nada },
        { icon: BsSortAlphaDown, title: 'A-Z', onDropdownFunction: Nada },
        { icon: BsSortAlphaDownAlt, title: 'Z-A', onDropdownFunction: Nada },
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
                    onClick={() => setIsDropdownToggle(!isDropdownToggle)}
                    className="absolute right-0 text-6xl cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                />
            </header>
            <hr className="border border-fontColor" />
            <DropdownField
                listItems={sortsOptions}
                dropdownToggle={isDropdownToggle}
            />
            <main className="grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-8 w-full p-6 place-items-center justify-center font-montserrat xl:justify-start">
                <div
                    onClick={() => setIsModalToggle(!isModalToggle)}
                    title="Criar Nova Lista"
                    className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-6xl shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100"
                >
                    <IoAddOutline />
                </div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100 relative">
                    {isFixed ? (
                        <BsPinAngle
                            onClick={() => setIsFixed(!isFixed)}
                            aria-label="Lista fixada está ativada"
                            className="absolute top-2 right-2 text-5xl hover:bg-opacity-20 hover:bg-zinc-800 rounded-full p-2"
                        />
                    ) : (
                        <BsPinAngleFill
                            onClick={() => setIsFixed(!isFixed)}
                            aria-label="Lista fixada está desativada"
                            className="absolute top-2 right-2 text-5xl hover:bg-opacity-20 hover:bg-zinc-800 rounded-full p-2"
                        />
                    )}
                    Leitura
                </div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md">
                    Lista de Compras
                </div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md">
                    Filmes
                </div>
            </main>
            <ModalCreateList
                modalOpen={isModalToggle}
                modalClose={() => setIsModalToggle(!isModalToggle)}
            />
        </div>
    );
}
