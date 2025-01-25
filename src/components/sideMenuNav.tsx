'use client';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
    CiSun,
    CiStar,
    CiHome,
    CiCalendar,
    CiCircleList,
} from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

export default function SideMenuNav() {
    const [isMenuToggle, setIsMenuToggle] = useState(false);

    return (
        <aside
            className={`min-h-svh bg-foreground py-8 shadow-2xl relative rounded-e-4xl transition-all duration-500 ${
                isMenuToggle ? 'w-72' : 'w-32'
            }`}
        >
            <Link
                href="/login"
                className="flex mb-20 items-center gap-3 px-8 py-2 text-lg transition-all duration-200 rounded-lg hover:bg-slate-100 hover:shadow-sm hover:border-r-4 hover:border-r-primary"
            >
                {/* <Image src={''} alt={'sdc'}></Image> */}
                <div
                    className={`h-12 w-12 rounded-full bg-primary border-2 border-fontColor ${
                        isMenuToggle ? 'mx-0' : 'mx-auto'
                    }`}
                ></div>
                <h3
                    className={`transition-all duration-75 ${
                        isMenuToggle
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
                onClick={() => setIsMenuToggle(!isMenuToggle)}
                className="p-2 text-3xl bg-primary rounded-full shadow-2xl absolute top-24 -right-6 active:bg-pink-300 hover:bg-pink-200 transition-colors duration-100"
            >
                <IoIosArrowForward
                    className={`transition-all duration-200  ${
                        isMenuToggle ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </button>
            <nav>
                <ul>
                    <li>
                        <Link
                            href="/"
                            className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                isMenuToggle
                                    ? 'justify-start'
                                    : 'justify-center'
                            }`}
                        >
                            <CiHome className="text-3xl" />
                            <p
                                className={`transition-all duration-75 ${
                                    isMenuToggle
                                        ? 'opacity-100 relative delay-200'
                                        : 'opacity-0 absolute'
                                }`}
                            >
                                Início
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                isMenuToggle
                                    ? 'justify-start'
                                    : 'justify-center'
                            }`}
                        >
                            <CiSun className="text-3xl" />
                            <p
                                className={`transition-all duration-75 ${
                                    isMenuToggle
                                        ? 'opacity-100 relative delay-200'
                                        : 'opacity-0 absolute'
                                }`}
                            >
                                Diária
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                isMenuToggle
                                    ? 'justify-start'
                                    : 'justify-center'
                            }`}
                        >
                            <CiCalendar className="text-3xl" />
                            <p
                                className={`transition-all duration-75 ${
                                    isMenuToggle
                                        ? 'opacity-100 relative delay-200'
                                        : 'opacity-0 absolute'
                                }`}
                            >
                                Planejadas
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                isMenuToggle
                                    ? 'justify-start'
                                    : 'justify-center'
                            }`}
                        >
                            <CiStar className="text-3xl" />
                            <p
                                className={`transition-all duration-75 ${
                                    isMenuToggle
                                        ? 'opacity-100 relative delay-200'
                                        : 'opacity-0 absolute'
                                }`}
                            >
                                Importantes
                            </p>
                        </Link>
                    </li>
                </ul>
                <hr className="border border-fontColor m-4" />
                <ul>
                    <li>
                        <Link
                            href="/listTasks"
                            className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                isMenuToggle
                                    ? 'justify-start'
                                    : 'justify-center'
                            }`}
                        >
                            <CiCircleList className="text-3xl" />
                            <p
                                className={`transition-all duration-75 ${
                                    isMenuToggle
                                        ? 'opacity-100 relative delay-200'
                                        : 'opacity-0 absolute'
                                }`}
                            >
                                Leitura
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
