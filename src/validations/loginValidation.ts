import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required('O e-mail é obrigatório.')
        .email('Digite um e-mail válido.'),
    password: Yup.string()
        .required('A senha é obrigatória.')
        .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

export const signupValidationSchema = Yup.object().shape({
    username: Yup.string()
        .required('O nome de usuário é obrigatório.')
        .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres.'),
    email: Yup.string()
        .required('O e-mail é obrigatório.')
        .email('Digite um e-mail válido.'),
    password: Yup.string()
        .required('A senha é obrigatória.')
        .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
    confirmPassword: Yup.string()
        .required('Confirme sua senha.')
        .oneOf([Yup.ref('password')], 'As senhas não são iguais.'),
});
