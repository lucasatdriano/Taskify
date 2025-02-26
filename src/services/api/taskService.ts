import { AxiosError } from 'axios';
import api from './index';
import API_ROUTES from './routes';

const taskService = {
    tasks: async (listId: string) => {
        try {
            const response = await api.get(API_ROUTES.TASKS.TASKS({ listId }));
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data) {
                const errorMessage = `${error.response.data.error} - ${error.response.data.details}`;
                throw new Error(errorMessage);
            }
            throw new Error('Erro ao conectar ao servidor.');
        }
    },
    tasksPlanned: async (userId: string) => {
        try {
            const response = await api.get(
                API_ROUTES.TASKS.TASKS_PLANNED({ userId }),
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
    tasksImportants: async (userId: string) => {
        try {
            const response = await api.get(
                API_ROUTES.TASKS.TASKS_IMPORTANT({ userId }),
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
    createTask: async (
        listId: string,
        title: string,
        description?: string,
        priority?: string,
        completed?: boolean,
        important?: boolean,
        dueDate?: string,
        notification?: boolean,
        file?: string,
    ) => {
        try {
            const response = await api.post(
                API_ROUTES.TASKS.CREATE_TASK({ listId }),
                {
                    title,
                    description,
                    priority,
                    completed,
                    important,
                    dueDate,
                    notification,
                    file,
                },
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
    task: async (listId: string, taskId: string) => {
        try {
            const response = await api.get(
                API_ROUTES.TASKS.TASK({ listId, taskId }),
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
    updateTask: async (
        listId: string,
        taskId: string,
        title?: string,
        description?: string,
        priority?: string,
        completed?: boolean,
        important?: boolean,
        dueDate?: string,
        notification?: boolean,
        file?: string,
    ) => {
        try {
            const response = await api.put(
                API_ROUTES.TASKS.UPDATE_TASK({ listId, taskId }),
                {
                    title,
                    description,
                    priority,
                    completed,
                    important,
                    dueDate,
                    notification,
                    file,
                },
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
    deleteTask: async (listId: string, taskId: string) => {
        try {
            const response = await api.delete(
                API_ROUTES.TASKS.DELETE_TASK({ listId, taskId }),
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

export default taskService;
