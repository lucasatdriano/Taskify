'use client';
import { useState } from 'react';
import { CiStar, CiSquareCheck } from 'react-icons/ci';
import { TbSquare } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa6';

export default function CardTasks() {
    const [check, setCheck] = useState(false);
    const [taskImportant, setTaskImportant] = useState(false);

    return (
        <div className="h-fit w-full p-1 bg-gradient-to-r from-secundary to-accent rounded-xl shadow-lg">
            <div className="flex justify-between items-center bg-foreground py-4 px-10 w-full h-full rounded-xl relative">
                <div
                    onClick={() => setCheck(!check)}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <div className="relative inline-block">
                        {check ? (
                            <CiSquareCheck className="text-4xl bg-primary rounded-md" />
                        ) : (
                            <TbSquare className="text-4xl " />
                        )}
                    </div>
                    <div className={`${check && 'line-through'}`}>
                        <p className="text-2xl">Ler Coraline</p>
                        <p>Hoje</p>
                    </div>
                </div>
                {taskImportant ? (
                    <FaStar
                        onClick={() => setTaskImportant(!taskImportant)}
                        className="text-5xl text-accent cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200 "
                    />
                ) : (
                    <CiStar
                        onClick={() => setTaskImportant(!taskImportant)}
                        className="text-5xl text-accent cursor-pointer hover:bg-gray-200 rounded-full p-1 transition-colors duration-200 "
                    />
                )}

                <div className="absolute bg-accent w-16 h-6 rounded-xl -right-8 top-2 shadow-md"></div>
            </div>
        </div>
    );
}
