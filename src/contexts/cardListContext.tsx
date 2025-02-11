import createStorageContext from './storageContext';

export type CardListProps = {
    id: string;
    title: string;
    createdAt: string;
    daily: boolean;
    collaboratorsEmails: string;
    userId: string;
    UserLists: Array<{
        fixed: boolean;
    }>;
};

export const { StorageProvider: CardListProvider, useStorage } =
    createStorageContext<CardListProps[]>('listsCard', []);

export function useCardList() {
    const { data: listsCard, setData: setListsCard } = useStorage();
    return { listsCard, setListsCard };
}
