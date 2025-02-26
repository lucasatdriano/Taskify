import { GoPlus } from 'react-icons/go';

interface ButtonCreateTaskProps {
    openMenuCreateTask: () => void;
}

export default function ButtonCreateTask({
    openMenuCreateTask,
}: ButtonCreateTaskProps) {
    return (
        <div
            onClick={openMenuCreateTask}
            className="h-fit w-full cursor-pointer group p-1 my-6 bg-gradient-to-r from-secundary to-accent rounded-xl shadow-lg"
        >
            <div className="flex justify-start items-center gap-1 text-xl font-lato bg-foreground py-4 px-10 w-full h-full rounded-xl group-hover:bg-opacity-90 group-hover:bg-zinc-100 transition-all duration-200">
                <GoPlus className="text-2xl" />
                Criar Tarefa
            </div>
        </div>
    );
}
