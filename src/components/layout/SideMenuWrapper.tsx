'use client';

import { usePathname } from 'next/navigation';
import SideMenuNav from './sideMenuNav';

export default function SideMenuWrapper() {
    const pathname = usePathname();
    const hiddenRoutes = ['/', '/signup'];

    if (hiddenRoutes.includes(pathname)) return null;

    return <SideMenuNav />;
}
