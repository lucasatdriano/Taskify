'use client';

import { usePathname } from 'next/navigation';
import SideMenuNav from './sideMenuNav';
import { Suspense, useEffect, useState } from 'react';

export default function SideMenuWrapper() {
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    const hiddenRoutes = ['/', '/signup'];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    if (hiddenRoutes.includes(pathname)) return null;

    return (
        <Suspense fallback={<div>Carregando menu...</div>}>
            <SideMenuNav />
        </Suspense>
    );
}
