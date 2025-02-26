'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import CardTasks from '@/components/tasks/cardTasks';
import ButtonCreateTask from '@/components/tasks/buttonCreateTask';
import MenuCreateTask from '@/components/tasks/menuCreateTask';
import HeaderListPage from '@/components/lists/headerListPage';

export default function ListTasks() {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const [openMenuCreateTask, setOpenMenuCreateTask] = useState(false);
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

    // const [completedHeight, setCompletedHeight] = useState(200);

    // const handleResize = (e: any, { size }: { size: { height: number } }) => {
    //     setCompletedHeight(size.height);
    // };

    return (
        <div className="max-h-svh w-full p-10">
            <MenuCreateTask
                active={openMenuCreateTask}
                closeMenu={() => setOpenMenuCreateTask(!openMenuCreateTask)}
            />
            <HeaderListPage title={title} />
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
                    {/* <ResizableBox
                        width={800} // Largura fixa ou ajustável conforme necessário
                        height={completedHeight} // A altura é controlada pelo estado
                        axis="y" // Permite redimensionar apenas na direção vertical (y)
                        minConstraints={[800, 100]} // Definindo a altura mínima
                        maxConstraints={[800, 600]} // Definindo a altura máxima
                        onResizeStop={handleResize} // Lida com o fim do redimensionamento
                        resizeHandles={['s']} // Permite redimensionar apenas pela parte inferior (handle 's')
                    > */}
                    <div className="grid gap-4 px-10 overflow-y-auto">
                        {tasksCompleted.map((task) => (
                            <CardTasks key={task.id} task={task} />
                        ))}
                    </div>
                    {/* </ResizableBox> */}
                </div>
                <ButtonCreateTask
                    openMenuCreateTask={() =>
                        setOpenMenuCreateTask(!openMenuCreateTask)
                    }
                />
            </main>
        </div>
    );
}
