import { CardListProps } from '@/contexts/cardListContext';
import * as Yup from 'yup';

export const getListValidationSchema = (existingLists: Array<CardListProps>) =>
    Yup.object().shape({
        listName: Yup.string()
            .required('O nome da lista é obrigatório.')
            .min(2, 'O nome da lista deve ter pelo menos 2 caracteres.')
            .notOneOf(
                ['Título', 'título', 'titulo'],
                'Escreva um nome válido para a sua lista.',
            )
            .test(
                'unique-name',
                'Esse nome já está em uso. Escolha outro.',
                (value) =>
                    !existingLists.map((existingList) => {
                        existingList.title.includes(value);
                    }),
            ),
    });
