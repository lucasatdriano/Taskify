import React, { createContext, useContext, useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type StorageContextProps<T> = {
    data: T;
    setData: React.Dispatch<React.SetStateAction<T>>;
    isLoading: boolean;
};

function createStorageContext<T>(key: string, defaultValue: T) {
    const storageContext = createContext<StorageContextProps<T> | undefined>(
        undefined,
    );

    function StorageProvider({ children }: { children: React.ReactNode }) {
        const [data, setData] = useState<T>(defaultValue);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const storedData = localStorage.getItem(key);
            if (storedData) {
                setData(JSON.parse(storedData));
            }
            setIsLoading(false);
        }, []);

        useEffect(() => {
            if (!isLoading) {
                localStorage.setItem(key, JSON.stringify(data));
            }
        }, [data, isLoading]);

        if (isLoading) {
            return (
                <div className="w-full h-svh flex flex-col justify-center items-center gap-4 text-xl">
                    Carregando...
                    <AiOutlineLoading3Quarters className="text-4xl animate-spin text-primary" />
                </div>
            );
        }

        return (
            <storageContext.Provider value={{ data, setData, isLoading }}>
                {children}
            </storageContext.Provider>
        );
    }

    function useStorage() {
        const context = useContext(storageContext);
        if (!context) {
            throw new Error(
                `useStorage deve ser usado dentro de ${key}Provider`,
            );
        }
        return context;
    }

    return { StorageProvider, useStorage };
}

export default createStorageContext;
