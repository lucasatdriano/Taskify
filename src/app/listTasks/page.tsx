import { IoEllipsisVerticalSharp } from 'react-icons/io5';

export default function ListTasks() {
    return (
        <div className=" w-full p-10">
            <header className="flex w-full place-content-center relative">
                <h1 className="font-poppins text-5xl text-center pb-4">
                    Leitura
                </h1>
                <div className="absolute right-24 bottom-0 p-3">
                    <div className="w-14 h-14 rounded-full bg-primary"></div>
                    <div className="absolute inset-0 -right-14 m-auto w-14 h-14 rounded-full bg-secundary"></div>
                </div>
                <IoEllipsisVerticalSharp className="absolute right-0 text-6xl hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-colors duration-200" />
            </header>
            <hr className="border-1 border-fontColor" />
            <main className="grid grid-cols-6 gap-5 w-full p-6 place-items-center"></main>
        </div>
    );
}
