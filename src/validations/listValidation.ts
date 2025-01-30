import * as Yup from 'yup';

export const listValidationSchema = Yup.object().shape({
    listName: Yup.string()
        .required('O nome da lista é obrigatório.')
        .min(2, 'O nome da lista deve ter pelo menos 2 caracteres.')
        .notOneOf(
            ['Título', 'título', 'titulo'],
            'Escreva um nome válido para a sua lista.',
        ),
});
