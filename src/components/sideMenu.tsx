'use client';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiSun, CiStar, CiHome, CiCalendar } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

export default function SideMenu() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <aside
            className={`h-svh bg-foreground py-8 shadow-2xl relative rounded-e-4xl transition-all duration-500 ${
                openMenu ? 'w-72' : 'w-32'
            }`}
        >
            <Link
                href="/login"
                className="flex mb-20 items-center gap-3 px-8 py-2 text-2xl transition-all duration-200 rounded-lg hover:bg-slate-100 hover:shadow-sm hover:border-r-4 hover:border-r-primary"
            >
                {/* <Image src={'./sideMenu'} alt={'sdc'}></Image> */}
                <div className="h-16 w-16 rounded-full bg-primary border-2 border-fontColor"></div>
                <h3
                    className={`transition-all duration-75 ${
                        openMenu
                            ? 'opacity-100 relative delay-200'
                            : 'opacity-0 absolute'
                    }`}
                >
                    Lucas
                </h3>
            </Link>
            <button
                title="Abrir Menu"
                type="button"
                className="p-2 text-4xl bg-primary rounded-full shadow-2xl absolute top-24 -right-6 active:bg-pink-300 hover:bg-pink-200 transition-colors duration-100"
            >
                <IoIosArrowForward
                    onClick={() => setOpenMenu(!openMenu)}
                    className={`transition-all duration-200  ${
                        openMenu ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </button>
            <nav>
                <ul>
                    <li
                        className={`flex items-center gap-2 text-2xl font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary ${
                            openMenu ? 'justify-start' : 'justify-center'
                        }`}
                    >
                        <CiHome className="text-5xl" />
                        <Link
                            href="/"
                            className={`transition-all duration-75 ${
                                openMenu
                                    ? 'opacity-100 relative delay-200'
                                    : 'opacity-0 absolute'
                            }`}
                        >
                            Início
                        </Link>
                    </li>
                    <li
                        className={`flex items-center gap-2 text-2xl cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary ${
                            openMenu ? 'justify-start' : 'justify-center'
                        }`}
                    >
                        <CiSun className="text-5xl" />
                        <Link
                            href="/listTasks"
                            className={`transition-all duration-75 ${
                                openMenu
                                    ? 'opacity-100 relative delay-200'
                                    : 'opacity-0 absolute'
                            }`}
                        >
                            Diária
                        </Link>
                    </li>
                    <li
                        className={`flex items-center gap-2 text-2xl cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary ${
                            openMenu ? 'justify-start' : 'justify-center'
                        }`}
                    >
                        <CiCalendar className="text-5xl" />
                        <p
                            className={`transition-all duration-75 ${
                                openMenu
                                    ? 'opacity-100 relative delay-200'
                                    : 'opacity-0 absolute'
                            }`}
                        >
                            Planejadas
                        </p>
                    </li>
                    <li
                        className={`flex items-center gap-2 text-2xl cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary ${
                            openMenu ? 'justify-start' : 'justify-center'
                        }`}
                    >
                        <CiStar className="text-5xl" />
                        <p
                            className={`transition-all duration-75 ${
                                openMenu
                                    ? 'opacity-100 relative delay-200'
                                    : 'opacity-0 absolute'
                            }`}
                        >
                            Importantes
                        </p>
                    </li>
                </ul>
                <hr className="border-1 border-fontColor m-4" />
                <ul>
                    <li
                        className={`flex items-center gap-2 text-2xl cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary ${
                            openMenu ? 'justify-start' : 'justify-center'
                        }`}
                    >
                        {' '}
                        <p
                            className={`transition-all duration-75 ${
                                openMenu
                                    ? 'opacity-100 relative delay-200'
                                    : 'opacity-0 absolute'
                            }`}
                        ></p>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
