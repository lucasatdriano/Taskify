import { BiSortAlt2 } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';

export default function Home() {
    return (
        <div className=" w-full p-10">
            <header className="flex w-full place-content-center relative">
                <h1 className="font-poppins text-5xl text-center pb-4">
                    Taskify
                </h1>
                <BiSortAlt2 className="absolute right-0 text-6xl hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200" />
            </header>
            <hr className="border-1 border-fontColor" />
            <main className="grid grid-cols-6 gap-5 w-full p-6 place-items-center">
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-6xl shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100">
                    <IoAddOutline />
                </div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md cursor-pointer hover:bg-pink-200 transition-colors duration-100"></div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md">
                    Filmes
                </div>
                <div className="w-56 h-56 bg-primary rounded-2xl grid place-items-center text-2xl text-center p-6 shadow-md">
                    Lista de Compras
                </div>
            </main>
        </div>
    );
}
