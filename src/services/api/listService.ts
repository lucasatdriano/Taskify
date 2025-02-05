import { AxiosError } from 'axios';
import api from './index';
import API_ROUTES from './routes';

const listService = {
    lists: async () => {
        try {
            const response = await api.get(API_ROUTES.LISTS.LISTS);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data) {
                const errorMessage = `${error.response.data.error} - ${error.response.data.details}`;
                throw new Error(errorMessage);
            }
            throw new Error('Erro ao conectar ao servidor.');
        }
    },
    createList: async (
        title: string,
        daily: boolean,
        collaboratorsEmails: string,
    ) => {
        try {
            const response = await api.post(API_ROUTES.LISTS.CREATE_LIST, {
                title,
                daily,
                collaboratorsEmails,
            });
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data) {
                const errorMessage = `${error.response.data.error} - ${error.response.data.details}`;
                throw new Error(errorMessage);
            }
            throw new Error('Erro ao conectar ao servidor.');
        }
    },
    task: async (listId: string) => {
        try {
            const response = await api.get(API_ROUTES.LISTS.LIST({ listId }));
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data) {
                const errorMessage = `${error.response.data.error} - ${error.response.data.details}`;
                throw new Error(errorMessage);
            }
            throw new Error('Erro ao conectar ao servidor.');
        }
    },
    updateList: async (listId: string) => {
        try {
            const response = await api.put(
                API_ROUTES.LISTS.UPDATE_LIST({ listId }),
            );
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data) {
                const errorMessage = `${error.response.data.error} - ${error.response.data.details}`;
                throw new Error(errorMessage);
            }
            throw new Error('Erro ao conectar ao servidor.');
        }
    },
    deleteList: async (listId: string) => {
        try {
            const response = await api.delete(
                API_ROUTES.LISTS.DELETE_LIST({ listId }),
            );
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data) {
                const errorMessage = `${error.response.data.error} - ${error.response.data.details}`;
                throw new Error(errorMessage);
            }
            throw new Error('Erro ao conectar ao servidor.');
        }
    },
};

export default listService;
