'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CiStar, CiHome, CiCalendar, CiCircleList } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import userService from '@/services/api/userService';
import Image from 'next/image';
import { formatName } from '@/utils/formatters';
import { useCardList } from '@/contexts/cardListContext';
import { usePathname, useRouter } from 'next/navigation';

export default function SideMenuNav() {
    const [isMenuToggle, setIsMenuToggle] = useState(false);
    const [user, setUser] = useState({
        id: '',
        name: '',
        image: '',
        email: '',
    });
    const { listsCard } = useCardList();
    const pathname = usePathname();
    const router = useRouter();
    const fixedLists = listsCard.filter((list) => list.UserLists?.[0].fixed);

    useEffect(() => {
        const fetchProfile = async () => {
            const getCookie = (name: string) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop()?.split(';').shift();
            };

            const id = getCookie('id');
            if (!id) return;

            try {
                const data = await userService.profile(id);
                setUser({
                    id: data.id,
                    name: formatName(data.name),
                    image: data.image,
                    email: data.email,
                });
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        };

        fetchProfile();
    }, []);

    function isPathActive(path: string) {
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return pathname === normalizedPath ||
            pathname.startsWith(normalizedPath + '/')
            ? 'bg-slate-100 shadow-sm border-r-4 border-r-primary'
            : '';
    }

    return (
        <aside
            className={`min-h-svh bg-foreground py-8 shadow-2xl relative rounded-e-4xl transition-all duration-500 ${
                isMenuToggle ? 'w-72' : 'w-32'
            }`}
        >
            <Link
                href="/"
                className="flex mb-20 items-center gap-3 px-8 py-2 text-lg transition-all duration-200 rounded-lg hover:bg-slate-100 hover:shadow-sm hover:border-r-4 hover:border-r-primary"
            >
                <div
                    className={`h-12 w-12 rounded-full border-2 border-fontColor ${
                        isMenuToggle ? 'mx-0' : 'mx-auto'
                    }`}
                >
                    <Image
                        width={50}
                        height={50}
                        src={'/images/imageUserPlaceholder.svg'}
                        alt={'imagem do usuário'}
                    />
                </div>
                <h3
                    className={`transition-all duration-75 ${
                        isMenuToggle
                            ? 'opacity-100 relative delay-200'
                            : 'opacity-0 absolute'
                    }`}
                >
                    {user.name}
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
                            href={`/home/${user.id}`}
                            className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                isMenuToggle
                                    ? 'justify-start'
                                    : 'justify-center'
                            } ${isPathActive(`home/${user.id}`)}`}
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
                            href="/a"
                            className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                isMenuToggle
                                    ? 'justify-start'
                                    : 'justify-center'
                            } ${isPathActive(`/a`)}`}
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
                    {fixedLists.map((list) => (
                        <li key={list.id}>
                            <Link
                                href={`/listTasks/${list.id}`} // Apenas o caminho base
                                onClick={(e) => {
                                    e.preventDefault(); // Previne comportamento inesperado
                                    router.push(
                                        `/listTasks/${list.id}?title=${list.title}`,
                                    );
                                }}
                                className={`flex items-center gap-2 w-full text-base font-montserrat cursor-pointer hover:bg-slate-100 py-2 px-6 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary transition-all duration-75 ${
                                    isMenuToggle
                                        ? 'justify-start'
                                        : 'justify-center'
                                } ${isPathActive(`/listTasks/${list.id}`)}`} // Passa apenas o ID sem query params
                            >
                                <CiCircleList className="text-3xl" />
                                <p
                                    className={`transition-all duration-75 ${
                                        isMenuToggle
                                            ? 'opacity-100 relative delay-200'
                                            : 'opacity-0 absolute'
                                    }`}
                                >
                                    {list.title}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
