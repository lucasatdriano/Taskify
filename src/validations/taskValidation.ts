import * as Yup from 'yup';

export const taskValidationSchema = Yup.object().shape({
    taskName: Yup.string()
        .required('O nome da tarefa é obrigatório.')
        .min(2, 'O nome da tarefa deve ter pelo menos 2 caracteres.'),
});
