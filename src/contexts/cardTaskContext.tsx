import createStorageContext from './storageContext';

export type CardTaskProps = {
    id: number;
    title: string;
    description: string;
    priority: string;
    isFixed: boolean;
    isCompleted: boolean;
    createdAt: Date;
    dueDate: Date;
    notification: boolean;
    important: boolean;
    fileAttached: string;
};

// Criando o contexto específico para tarefas
export const { StorageProvider: CardTaskProvider, useStorage: useCardTask } =
    createStorageContext<CardTaskProps[]>('cardTasks', []);
