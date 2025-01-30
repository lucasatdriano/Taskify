'use client';

import { useEffect, useState } from 'react';
import DropdownField from '@/components/layout/dropdownField';
import { BiSortAlt2 } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import { CiClock2, CiEdit } from 'react-icons/ci';
import { BsSortAlphaDownAlt, BsSortAlphaDown } from 'react-icons/bs';
import ModalCreateList from '@/components/lists/modalCreateList';
import CardList from '@/components/lists/cardList';
import { CardListProps, useCardList } from '@/contexts/cardListContext';
import { v4 as uuidv4 } from 'uuid';

import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor,
    DragEndEvent,
    DragOverEvent,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

export default function Home() {
    const [isDropdownToggle, setIsDropdownToggle] = useState(false);
    const [isModalToggle, setIsModalToggle] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(
        'Data de Criação',
    );
    const [overId, setOverId] = useState<string | null>(null);
    const { listsCard, setListsCard } = useCardList();

    const sortsOptions = [
        {
            icon: CiEdit,
            title: 'Personalizado',
            onDropdownFunction: () => true,
        },
        {
            icon: CiClock2,
            title: 'Data de Criação',
            onDropdownFunction: handleSortDate,
        },
        {
            icon: BsSortAlphaDown,
            title: 'A-Z',
            onDropdownFunction: handleSortAZ,
        },
        {
            icon: BsSortAlphaDownAlt,
            title: 'Z-A',
            onDropdownFunction: handleSortZA,
        },
    ];

    useEffect(() => {
        const listsToDo = localStorage.getItem('listsCard');
        if (listsToDo) {
            const parsedLists = JSON.parse(listsToDo);
            setListsCard(parsedLists);
        }
    }, [setListsCard]);

    useEffect(() => {
        if (listsCard.length > 0) {
            localStorage.setItem('listsCard', JSON.stringify(listsCard));
        }
    }, [listsCard]);

    function handleSort(option: string, sortFunction: () => void) {
        setSelectedOption(option);
        sortFunction();
    }

    function handleSortDate() {
        const listSortedDateCreate = [...listsCard].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB.getTime() - dateA.getTime();
        });

        setListsCard(listSortedDateCreate);
    }

    function handleSortAZ() {
        const listSortedAZ = [...listsCard].sort((a, b) =>
            a.title.localeCompare(b.title),
        );
        setListsCard(listSortedAZ);
    }

    function handleSortZA() {
        const listSortedZA = [...listsCard].sort((a, b) =>
            b.title.localeCompare(a.title),
        );
        setListsCard(listSortedZA);
    }

    function addNewCard(newCard: Omit<CardListProps, 'id'>) {
        setListsCard((prevCards) => [
            { ...newCard, id: uuidv4() },
            ...prevCards,
        ]);
    }

    function handleToggleCardListFixed(cardId: string) {
        setListsCard((prevCards) =>
            prevCards.map((card) =>
                card.id == cardId ? { ...card, isFixed: !card.isFixed } : card,
            ),
        );
    }

    function handleDragOver(event: DragOverEvent) {
        setOverId(event.over?.id?.toString() ?? null);
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        if (active.id !== over.id) {
            const oldIndex = listsCard.findIndex(
                (card) => card.id === active.id,
            );
            const newIndex = listsCard.findIndex((card) => card.id === over.id);

            setListsCard((prev) => arrayMove(prev, oldIndex, newIndex));
            setSelectedOption('Personalizado');
        }

        setOverId(null);
    }
    const sensors = useSensors(useSensor(PointerSensor));

    return (
        <div className="w-full p-10">
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
                setDropdownToggle={setIsDropdownToggle}
                onSort={handleSort}
                selectedOption={selectedOption}
            />

            <DndContext
                collisionDetection={closestCenter}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
                sensors={sensors}
            >
                <SortableContext items={listsCard.map((card) => card.id)}>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-8 p-6 place-items-center justify-center font-montserrat xl:justify-start">
                        <div
                            onClick={() => setIsModalToggle(!isModalToggle)}
                            title="Criar Nova Lista"
                            className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-6xl shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100"
                        >
                            <IoAddOutline />
                        </div>

                        {listsCard.map((card) => (
                            <CardList
                                key={card.id}
                                list={card}
                                onToggleFixed={handleToggleCardListFixed}
                                overId={overId}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>

            <ModalCreateList
                modalOpen={isModalToggle}
                modalClose={() => setIsModalToggle(!isModalToggle)}
                addNewCard={addNewCard}
            />
        </div>
    );
}
