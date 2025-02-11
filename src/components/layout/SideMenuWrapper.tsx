'use client';

import { usePathname } from 'next/navigation';
import SideMenuNav from './sideMenuNav';
import { Suspense } from 'react';

export default function SideMenuWrapper() {
    const pathname = usePathname();
    const hiddenRoutes = ['/', '/signup'];

    if (hiddenRoutes.includes(pathname)) return null;

    return (
        <Suspense fallback={<div>Carregando menu...</div>}>
            <SideMenuNav />
        </Suspense>
    );
}
