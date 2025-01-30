'use client';

import * as Yup from 'yup';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsPinAngle, BsClipboard2Check } from 'react-icons/bs';
import { CardListProps } from '@/contexts/cardListContext';
import { listValidationSchema } from '@/validations/listValidation';

type Modal = {
    modalOpen: boolean;
    modalClose: () => void;
    addNewCard: (newCard: Omit<CardListProps, 'id'>) => void;
};

export default function ModalCreateList({
    modalOpen,
    modalClose,
    addNewCard,
}: Modal) {
    const [isFixed, setIsFixed] = useState(false);
    const [isDaily, setIsDaily] = useState(false);
    const [valueTitle, setValueTitle] = useState('Título');
    const [error, setError] = useState<string | null>(null);
    const titleListRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (modalOpen) {
            setTimeout(() => {
                titleListRef.current?.focus();
            }, 100);
        }
    }, [modalOpen]);

    function handleCloseModal() {
        setIsFixed(false);
        setIsDaily(false);
        setValueTitle('Título');
        setError(null);
        modalClose();
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValueTitle(e.target.value);
    }

    async function handleSubmitCreateCard() {
        try {
            await listValidationSchema.validate({ listName: valueTitle });
            const newList = {
                title: valueTitle,
                createdAt: new Date(),
                isFixed,
                isDaily,
                collaborators: null,
            };
            addNewCard(newList);
            handleCloseModal();
        } catch (validationError) {
            if (validationError instanceof Yup.ValidationError) {
                setError(validationError.message);
                titleListRef.current?.focus();
            }
        }
    }

    return (
        <Dialog
            onClose={handleCloseModal}
            open={modalOpen}
            className="fixed inset-0 grid place-items-center bg-opacity-25 bg-black"
        >
            <DialogPanel
                transition
                className="bg-primary p-4 rounded-2xl text-center flex flex-col justify-center items-center scale-90 duration-300 data-[open]:scale-100 data-[closed]:scale-90 data-[closed]:opacity-0"
            >
                <div className="relative w-full">
                    <input
                        title="Adicionar nome a sua lista"
                        type="text"
                        name="inputTextTitleList"
                        id="inputTextTitleList"
                        ref={titleListRef}
                        placeholder="Título"
                        className="text-5xl outline-none bg-transparent w-72 border-b-2 border-transparent focus:border-b-fontColor transition-all duration-200"
                        value={valueTitle}
                        onChange={handleChange}
                    />
                    {error && (
                        <p className="absolute translate-x-1/2 text-red-600 mt-2">
                            {error}
                        </p>
                    )}
                </div>

                <ul className="grid place-items-start mt-16 px-32">
                    <li
                        onClick={() => setIsDaily(!isDaily)}
                        aria-label={`Lista diária está ${
                            isDaily ? 'ativada' : 'desativada'
                        }`}
                        title="Selecionar botão de deixar lista diária ativada"
                        className={`flex items-center gap-2 text-2xl select-none cursor-pointer p-3 rounded-md w-full hover:bg-zinc-900 hover:bg-opacity-5 transition-all  ${
                            isDaily && 'text-purple-800'
                        }`}
                    >
                        <BsClipboard2Check className="text-4xl" /> Ativar Lista
                        Diária
                    </li>
                    <li
                        onClick={() => setIsFixed(!isFixed)}
                        aria-label={`Lista fixada está ${
                            isFixed ? 'ativada' : 'desativada'
                        }`}
                        title="Selecionar botão de deixar lista fixada"
                        className={`flex items-center gap-2 text-2xl select-none cursor-pointer p-3 rounded-md w-full hover:bg-zinc-900 hover:bg-opacity-5 transition-all  ${
                            isFixed && 'text-purple-800'
                        }`}
                    >
                        <BsPinAngle className="text-4xl" /> Deixar Lista Fixada
                    </li>
                    <li
                        title="Adicionar colaborador a sua lista"
                        className="flex items-center gap-2 text-2xl select-none cursor-pointer p-3 rounded-md w-full hover:bg-zinc-900 hover:bg-opacity-5 transition-all  "
                    >
                        <AiOutlineUserAdd className="text-4xl" /> Adicionar
                        Colaborador
                    </li>
                </ul>
                <button
                    title="Clique para Criar Lista"
                    type="button"
                    onClick={handleSubmitCreateCard}
                    className="bg-background text-2xl select-none font-lato rounded-3xl py-4 px-16 mt-16 shadow-lg transition-all hover:bg-opacity-90 hover:bg-zinc-200"
                >
                    Criar Lista de Tarefas
                </button>
            </DialogPanel>
        </Dialog>
    );
}
