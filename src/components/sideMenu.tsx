// import Image from 'next/image';
import Link from 'next/link';
import { CiSun, CiStar, CiHome, CiCalendar } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

export default function SideMenu() {
    return (
        <aside className="h-screen bg-foreground max-w-80 w-fit py-8 font-montserrat shadow-2xl relative rounded-e-4xl">
            <div className="flex pb-20 items-center gap-3 px-8">
                {/* <Image src={'./sideMenu'} alt={'sdc'}></Image> */}
                <div className="h-16 w-16 rounded-full bg-primary"></div>
                <h3 className="text-2xl">Sebastiana</h3>
            </div>
            <button
                title="Abrir Menu"
                type="button"
                className="p-2 text-4xl bg-primary rounded-full shadow-2xl absolute top-24 -right-6 active:bg-pink-200 transition-colors duration-75"
            >
                <IoIosArrowForward />
            </button>
            <nav>
                <ul>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary">
                        <CiHome className="text-5xl" />
                        <p className="text-2xl">Início</p>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary">
                        <CiSun className="text-5xl" />
                        <Link href="/listTasks" className="text-2xl">
                            Diária
                        </Link>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary">
                        <CiCalendar className="text-5xl" />
                        <p className="text-2xl">Planejadas</p>
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary">
                        <CiStar className="text-5xl" />
                        <p className="text-2xl">Importantes</p>
                    </li>
                </ul>
                <hr className="border-1 border-fontColor m-4" />
                <ul>
                    <li className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary">
                        <p className="text-2xl"></p>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
