'use client';
import { format } from 'date-fns';
import { useState } from 'react';
import { CiStar, CiSquareCheck } from 'react-icons/ci';
import { TbSquare } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa6';
import { ptBR } from 'date-fns/locale';
import { CardTaskProps } from '@/contexts/cardTaskContext';
// import { useSortable } from '@dnd-kit/sortable';
// import { useDroppable } from '@dnd-kit/core';

export default function CardTasks({
    task,
}: // overId,
{
    task: CardTaskProps;
    // overId: string | null;
}) {
    // const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    //     id: task.id,
    // });

    // useDroppable({
    //     id: `droppable-${task.id}`,
    // });

    // const opacity = isDragging ? 'opacity-50' : 'opacity-100';
    // const highlight = overId === task.id ? 'border border-secundary' : '';

    const [check, setCheck] = useState(task.isCompleted);
    const [taskImportant, setTaskImportant] = useState(task.important);
    const [isPriority] = useState(task.priority);

    function handleImportant(e: React.MouseEvent<HTMLOrSVGElement>) {
        setTaskImportant(!taskImportant);
        e.stopPropagation();
    }

    const priorityClasses: Record<string, string> = {
        Baixa: 'bg-green-600',
        Media: 'bg-yellow-600',
        Alta: 'bg-red-600',
    };

    const priorityClass = priorityClasses[task.priority] || 'opacity-0';

    return (
        <>
            <div
                key={task.id}
                className="h-fit w-full group cursor-pointer p-1 bg-gradient-to-r from-secundary to-accent rounded-xl shadow-md hover:shadow-lg"
            >
                <div className="flex justify-between items-center bg-foreground py-4 px-10 w-full h-full rounded-xl relative group-hover:bg-opacity-95 group-hover:bg-zinc-100 transition-all duration-200">
                    <div
                        onClick={() => setCheck(!check)}
                        className="flex items-center gap-3"
                    >
                        <div className="relative inline-block">
                            {check ? (
                                <CiSquareCheck className="text-3xl bg-primary rounded-md" />
                            ) : (
                                <TbSquare className="text-3xl " />
                            )}
                        </div>
                        <div className={`${check && 'line-through'}`}>
                            <p className="text-xl">{task.title}</p>
                            <p className="text-base">
                                {format(
                                    new Date(task.dueDate),
                                    "dd'/'MM'/'yyyy",
                                    { locale: ptBR },
                                )}{' '}
                                - {task.fileAttached}
                            </p>
                        </div>
                    </div>
                    {taskImportant ? (
                        <FaStar
                            onClick={handleImportant}
                            className="text-5xl text-accent cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 "
                        />
                    ) : (
                        <CiStar
                            onClick={handleImportant}
                            className="text-5xl text-accent cursor-pointer hover:bg-gray-200 rounded-full p-1 transition-colors duration-200 "
                        />
                    )}
                    {isPriority && (
                        <div
                            className={`absolute bg-accent w-12 h-4 rounded-xl -right-6 top-3 shadow-md ${priorityClass}`}
                        ></div>
                    )}
                </div>
            </div>
        </>
    );
}
