'use client';
import { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar, FaRegBell, FaExclamation } from 'react-icons/fa6';
import {
    TbCalendarSearch,
    TbCalendar,
    TbCalendarEvent,
    TbCalendarMonth,
    TbMinus,
    TbFile,
} from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { LuPanelRightClose } from 'react-icons/lu';
import { Dialog, DialogPanel } from '@headlessui/react';

type MenuCreate = {
    active: boolean;
    closeMenu: () => void;
};

export default function MenuCreateTask({ active, closeMenu }: MenuCreate) {
    const [isImportantTask, setIsImportantTask] = useState(false);
    const [isPriorityDropdown, setIsPriorityDropdown] = useState(false);

    return (
        <Dialog
            onClose={closeMenu}
            open={active}
            className="fixed w-full h-full grid place-items-end bg-black right-0 bg-opacity-0"
        >
            <DialogPanel
                transition
                className="relative h-svh bg-foreground shadow-2xl rounded-s-4xl flex flex-col justify-between items-center py-5 transition-all duration-1000 data-[open]:w-80 data-[closed]:w-0"
            >
                {isImportantTask ? (
                    <FaStar
                        onClick={() => setIsImportantTask(!isImportantTask)}
                        className="text-5xl absolute top-2 right-2 text-accent cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                    />
                ) : (
                    <CiStar
                        onClick={() => setIsImportantTask(!isImportantTask)}
                        className="text-5xl absolute top-2 right-2 text-accent cursor-pointer hover:bg-gray-200 rounded-full p-1 transition-colors duration-200"
                    />
                )}
                <ul className="w-full mt-28">
                    <li className="flex items-center gap-2 text-base py-4 px-6">
                        <input
                            title="Tarefa a ser feita"
                            type="text"
                            placeholder="Tarefa"
                            name="inputTextTask"
                            id="inputTextTask"
                            className="w-full text-xl bg-foreground rounded-t-lg indent-2 py-1 outline-none border-b border-fontColor"
                        />
                    </li>
                    <li className="flex items-center gap-2 text-base py-2 px-6 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                        <FaRegBell className="text-3xl" />
                        Lembre Me
                    </li>
                    <li className="text-base border-t border-fontColor">
                        <div
                            onClick={() =>
                                setIsPriorityDropdown(!isPriorityDropdown)
                            }
                            className="flex items-center gap-2 py-2 px-6 cursor-pointer hover:bg-zinc-200 transition-all duration-200"
                        >
                            <FaExclamation className="text-3xl" />
                            Definir Prioridade
                            <IoIosArrowDown
                                className={`transition-all duration-200 ${
                                    isPriorityDropdown && 'rotate-180'
                                }`}
                            />
                        </div>
                        <ul
                            className={`overflow-y-hidden transition-all duration-500 ${
                                isPriorityDropdown
                                    ? 'max-h-40 opacity-100'
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                            {isPriorityDropdown && (
                                <>
                                    <li className="text-red-500 border-t py-1 px-10 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                                        Alta
                                    </li>
                                    <li className="text-yellow-500 border-t py-1 px-10 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                                        Média
                                    </li>
                                    <li className="text-green-500 border-t py-1 px-10 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                                        Baixa
                                    </li>
                                </>
                            )}
                        </ul>
                    </li>
                    <li className="flex items-center gap-2 text-base py-2 px-6 border-t border-fontColor cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                        <TbCalendar className="text-3xl" />
                        Hoje
                    </li>
                    <li className="flex items-center gap-2 text-base py-2 px-6 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                        <TbCalendarEvent className="text-3xl" />
                        Amanhã
                    </li>
                    <li className="flex items-center gap-2 text-base py-2 px-6 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                        <TbCalendarMonth className="text-3xl" />
                        Próxima Semana
                    </li>
                    <li className="flex items-center gap-2 text-base py-2 px-6 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                        <TbCalendarSearch className="text-3xl" />
                        Selecione a Data
                    </li>
                    <li className="flex items-center gap-2 text-base py-2 px-6 cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                        <TbMinus className="text-3xl" />
                        Sem Data
                    </li>
                    <li className="flex items-center gap-2 text-base py-2 px-6 border-y border-fontColor cursor-pointer hover:bg-zinc-200 transition-all duration-200">
                        <TbFile className="text-3xl" />
                        Adicionar Arquivo
                    </li>
                    <li className="w-full py-2 px-6 h-52">
                        <textarea
                            title="Adicione a descrição da tarefa"
                            name="inputTextDescriptionTask"
                            id="inputTextDescriptionTask"
                            placeholder="Descrição da tarefa"
                            className="w-full h-full p-2 rounded-md resize-none"
                        ></textarea>
                    </li>
                </ul>
                <div className="flex justify-between border-t w-full p-2">
                    <LuPanelRightClose
                        onClick={closeMenu}
                        className="text-5xl cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                    />
                    <AiOutlineDelete className="text-5xl cursor-pointer text-red-400 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200" />
                </div>
            </DialogPanel>
        </Dialog>
    );
}
