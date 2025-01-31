import createStorageContext from './storageContext';

export type CardListProps = {
    id: string;
    title: string;
    isFixed: boolean;
    isDaily: boolean;
    createdAt: Date;
    collaborators: null;
};

// Criando o contexto específico para listas
export const { StorageProvider: CardListProvider, useStorage: useCardList } =
    createStorageContext<CardListProps[]>('listsCard', []);
