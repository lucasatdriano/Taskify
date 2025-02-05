type Params = {
    userId?: string;
    listId?: string;
    taskId?: string;
};

const API_ROUTES = {
    USERS: {
        BASE: '/users',
        REGISTER: '/users/register',
        LOGIN: '/users/login',
        PROFILE: ({ userId }: Params) => `/users/${userId}`,
        UPDATE_NAME: ({ userId }: Params) => `/users/${userId}/name`,
        UPDATE_PASSWORD: ({ userId }: Params) => `/users/${userId}/password`,
        REFRESH_TOKEN: '/users/refreshToken',
        LOGOUT: ({ userId }: Params) => `/users/${userId}/logout`,
    },
    LISTS: {
        LISTS: '/lists',
        CREATE_LIST: '/lists',
        LIST: ({ listId }: Params) => `/lists/${listId}`,
        UPDATE_LIST: ({ listId }: Params) => `/lists/${listId}`,
        DELETE_LIST: ({ listId }: Params) => `/lists/${listId}`,
    },
    TASKS: {
        TASKS: ({ listId }: Params) => `/tasks/${listId}`,
        CREATE_TASK: ({ listId }: Params) => `/tasks/${listId}`,
        TASK: ({ listId, taskId }: Params) => `/tasks/${listId}/${taskId}`,
        UPDATE_TASK: ({ listId, taskId }: Params) =>
            `/tasks/${listId}/${taskId}`,
        DELETE_TASK: ({ listId, taskId }: Params) =>
            `/tasks/${listId}/${taskId}`,
    },
};

export default API_ROUTES;
