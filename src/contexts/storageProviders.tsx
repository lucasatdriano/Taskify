'use client';

import React from 'react';
import { CardListProvider } from './cardListContext';
import { CardTaskProvider } from './cardTaskContext';

export function StorageProviders({ children }: { children: React.ReactNode }) {
    return (
        <CardListProvider>
            <CardTaskProvider>{children}</CardTaskProvider>
        </CardListProvider>
    );
}
