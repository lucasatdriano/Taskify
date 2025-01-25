'use client';
import { useState } from 'react';
import { CiStar, CiSquareCheck } from 'react-icons/ci';
import { TbSquare } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa6';

export default function CardTasks() {
    const [check, setCheck] = useState(false);
    const [taskImportant, setTaskImportant] = useState(false);

    function handleImportant(e: React.MouseEvent<HTMLOrSVGElement>) {
        setTaskImportant(!taskImportant);
        e.stopPropagation();
    }

    return (
        <div className="h-fit w-full group cursor-pointer p-1 bg-gradient-to-r from-secundary to-accent rounded-xl shadow-md hover:shadow-lg">
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
                        <p className="text-xl">Ler Coraline</p>
                        <p className="text-base">Hoje</p>
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

                <div className="absolute bg-accent w-12 h-4 rounded-xl -right-6 top-3 shadow-md"></div>
            </div>
        </div>
    );
}
