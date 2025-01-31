'use client';
import { useState } from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { BiSortAlt2 } from 'react-icons/bi';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import { useSearchParams } from 'next/navigation';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

import DropdownField from '@/components/layout/dropdownField';
import CardTasks from '@/components/tasks/cardTasks';
import ButtonCreateTask from '@/components/tasks/buttonCreateTask';
import MenuCreateTask from '@/components/tasks/menuCreateTask';

// type ListPageProps = {
//     params: {
//         idList: string;
//     };
// };

export default function ListTasks() {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
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
    const [cardsTask] = useState([
        {
            id: 1,
            title: 'Ler React para Iniciantes',
            description: 'Leitura do livro "React para Iniciantes"',
            priority: 'Média',
            isFixed: true,
            isCompleted: false,
            createdAt: new Date('2025-01-20'),
            dueDate: new Date('2025-01-25'),
            notification: true,
            fileAttached: 'Arquivo.txt',
            important: true,
        },
        {
            id: 2,
            title: 'Ler Diário de um Banana',
            description: 'Leitura do livro "Ler Diário de um Banana"',
            priority: 'Media',
            isFixed: true,
            isCompleted: false,
            createdAt: new Date('2025-01-21'),
            dueDate: new Date('2025-01-23'),
            notification: false,
            fileAttached: 'Arquivo.txt',
            important: true,
        },
        {
            id: 3,
            title: 'Ler Coraline',
            description: 'Leitura do livro "Coraline"',
            priority: 'Baixa',
            isFixed: false,
            isCompleted: false,
            createdAt: new Date('2025-01-22'),
            dueDate: new Date('2025-01-30'),
            notification: true,
            fileAttached: 'Arquivo.txt',
            important: false,
        },
    ]);

    // const tasksCompleted = cardsTask.filter((task) => task.isCompleted);
    // const tasksIncomplete = cardsTask.filter((task) => !task.isCompleted);

    const tasksCompleted = cardsTask.filter((task) => task.isCompleted == true);
    const tasksIncomplete = cardsTask.filter(
        (task) => task.isCompleted == false,
    );

    // Tamanho inicial da seção Concluídas
    const [completedHeight, setCompletedHeight] = useState(200);

    const handleResize = (e: any, { size }: { size: { height: number } }) => {
        setCompletedHeight(size.height);
    };

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
            <main className="w-full h-full py-6  flex flex-col justify-between">
                <div className="h-5/6 ">
                    <div className="max-h-96 grid gap-4 px-10 overflow-y-auto">
                        {tasksIncomplete.map((task) => (
                            <CardTasks key={task.id} task={task} />
                        ))}
                    </div>
                    <div className="relative cursor-grabbing">
                        <h2 className="w-fit bg-background p-2 ml-5 relative text-xl">
                            Concluídas
                        </h2>
                        <hr className="border border-fontColor absolute w-full top-1/2 -z-10" />
                    </div>
                    <ResizableBox
                        width={800} // Largura fixa ou ajustável conforme necessário
                        height={completedHeight} // A altura é controlada pelo estado
                        axis="y" // Permite redimensionar apenas na direção vertical (y)
                        minConstraints={[800, 100]} // Definindo a altura mínima
                        maxConstraints={[800, 600]} // Definindo a altura máxima
                        onResizeStop={handleResize} // Lida com o fim do redimensionamento
                        resizeHandles={['s']} // Permite redimensionar apenas pela parte inferior (handle 's')
                    >
                        <div className="grid gap-4 px-10 overflow-y-auto">
                            {tasksCompleted.map((task) => (
                                <CardTasks key={task.id} task={task} />
                            ))}
                        </div>
                    </ResizableBox>
                </div>
                <ButtonCreateTask
                    closeMenuCreateTask={() =>
                        setOpenMenuCreateTask(!openMenuCreateTask)
                    }
                />
            </main>
        </div>
    );
}
