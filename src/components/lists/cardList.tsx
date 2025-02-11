import Link from 'next/link';
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs';
import { useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import { CardListProps, useCardList } from '@/contexts/cardListContext';
import listService from '@/services/api/listService';

export default function CardList({
    list,
    overId,
}: {
    list: CardListProps;
    overId: string | null;
}) {
    const { attributes, listeners, setNodeRef, isDragging } = useSortable({
        id: list.id,
    });

    useDroppable({ id: `droppable-${list.id}` });

    const { setListsCard } = useCardList();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        setIsFixed(list.UserLists?.[0].fixed ?? false);
    }, [list.UserLists]);

    const opacity = isDragging ? 'opacity-50' : 'opacity-100';
    const highlight = overId === list.id ? 'border border-secundary' : '';

    async function handleToggleCardListFixed() {
        try {
            const newFixedState = !isFixed;
            await listService.updateList(list.id, { fixed: newFixedState });

            setIsFixed(newFixedState);

            setListsCard((prevLists: CardListProps[]) =>
                prevLists.map((prevList: CardListProps) =>
                    prevList.id === list.id
                        ? { ...prevList, UserLists: [{ fixed: newFixedState }] }
                        : prevList,
                ),
            );
        } catch (error) {
            console.error('Erro ao atualizar lista:', error);
        }
    }

    return (
        <div
            ref={setNodeRef}
            className={`sortable-transform rounded-2xl box-content ${opacity} ${highlight} transition-all duration-200`}
        >
            <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100 relative">
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleToggleCardListFixed();
                    }}
                    className="absolute top-2 right-2 text-3xl hover:bg-opacity-20 hover:bg-zinc-800 rounded-full p-2"
                >
                    {isFixed ? <BsPinAngleFill /> : <BsPinAngle />}
                </button>

                <Link
                    href={`/listTasks/${list.id}?title=${list.title}`}
                    key={list.id}
                    className="w-full h-full flex flex-col items-center justify-center p-6"
                    {...attributes}
                    {...listeners}
                >
                    {list.title}
                </Link>
            </div>
        </div>
    );
}
