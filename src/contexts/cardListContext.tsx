'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export type CardListProps = {
    id: string;
    title: string;
    isFixed: boolean;
    isDaily: boolean;
    createdAt: Date;
    collaborators: null;
};

type CardListContextProps = {
    listsCard: CardListProps[];
    setListsCard: React.Dispatch<React.SetStateAction<CardListProps[]>>;
};

const cardListContext = createContext<CardListContextProps | undefined>(
    undefined,
);

export function CardListProvider({ children }: { children: React.ReactNode }) {
    const [listsCard, setListsCard] = useState<CardListProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedListCards = localStorage.getItem('listsCard');
        if (storedListCards) {
            setListsCard(JSON.parse(storedListCards));
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('listsCard', JSON.stringify(listsCard));
        }
    }, [listsCard, isLoading]);

    if (isLoading) {
        return (
            <div className="w-full h-svh flex flex-col justify-center items-center gap-4 text-xl">
                Carregando...
                <AiOutlineLoading3Quarters className="text-4xl animate-spin text-primary" />
            </div>
        );
    }

    return (
        <cardListContext.Provider value={{ listsCard, setListsCard }}>
            {children}
        </cardListContext.Provider>
    );
}

export function useCardList() {
    const context = useContext(cardListContext);
    if (!context) {
        throw new Error(
            'useCardList deve ser usado dentro de CardListProvider',
        );
    }
    return context;
}
