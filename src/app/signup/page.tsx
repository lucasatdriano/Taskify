'use client';

import * as Yup from 'yup';
import InputTextField from '@/components/forms/inputTextField';
import userService from '@/services/api/userService';
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signupValidationSchema } from '@/validations/loginValidation';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleRegistration(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await signupValidationSchema.validate(formData, {
                abortEarly: false,
            });

            const data = await userService.register(
                formData.username,
                formData.email,
                formData.password,
            );
            console.log('Usuário cadastrado:', data);
            setErrors({});
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const validationErrors: { [key: string]: string } = {};
                error.inner.forEach((err) => {
                    if (err.path) {
                        validationErrors[err.path] = err.message;
                    }
                });
                setErrors(validationErrors);
            } else if (error instanceof Error) {
                console.error('Usuário não cadastrado:', error);
                setErrors({
                    general: error.message,
                });
            }
        }
    }

    return (
        <div className="grid place-items-center w-full h-svh">
            <div className="py-4 px-16 rounded-3xl border-2 border-fontColor relative grid place-items-center">
                <h2 className="text-4xl font-poppins bg-background mt-4">
                    Seja Bem-Vindo
                </h2>

                <form
                    onSubmit={handleRegistration}
                    className="grid w-full py-12 items-center"
                >
                    <h3 className="font-montserrat text-3xl my-8 text-center">
                        Cadastro
                    </h3>
                    <div className="grid gap-6 mb-12 justify-center">
                        <div className="w-full">
                            <InputTextField
                                type="text"
                                title="Digite um nome de usuário"
                                name="username"
                                id="inputUsername"
                                value={formData.username}
                                label="Nome de usuário"
                                onChange={handleChange}
                            />
                            {errors.username && (
                                <p className="text-red-600 text-sm">
                                    {errors.username}
                                </p>
                            )}
                        </div>
                        <div className="w-full">
                            <InputTextField
                                type="text"
                                title="Digite um email"
                                name="email"
                                id="inputEmail"
                                value={formData.email}
                                label="Email"
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="w-full">
                            <InputTextField
                                type="password"
                                title="Digite uma senha"
                                name="password"
                                id="inputPassword"
                                value={formData.password}
                                label="Senha"
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className="grid place-items-start gap-1">
                            <div className="w-full">
                                <InputTextField
                                    type="password"
                                    title="Confime sua senha"
                                    name="confirmPassword"
                                    id="inputConfirmPassword"
                                    value={formData.confirmPassword}
                                    label="Confirme sua senha"
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-600 text-sm">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>
                            {/* <p className="flex items-center gap-2 text-sm pl-4\">
                                <input
                                    title="Aceito os Termos de Uso"
                                    type="checkbox"
                                    name="checkBoxTerms"
                                    id="checkBoxTerms"
                                />
                                Concordo com os
                                <span className="text-secundary underline cursor-pointer">
                                    Termos de Uso
                                </span>
                            </p> */}
                        </div>
                    </div>
                    <button
                        title="Fazer Cadastro"
                        type="submit"
                        className="font-lato text-2xl py-3 bg-primary rounded-3xl w-full shadow-md outline-none hover:bg-pink-200 hover:shadow-lg transition-all duration-300"
                    >
                        Cadastrar
                    </button>
                </form>
                <Link
                    href="/"
                    title="Voltar para o Login"
                    className="font-lato text-lg border bg-background rounded-2xl mb-8 py-3 w-full flex justify-center gap-2 text-nowrap underline outline-none hover:bg-foreground hover:shadow-sm transition-all duration-300"
                >
                    Voltar para o Login
                </Link>
                <button
                    title="Entrar com Google"
                    type="button"
                    className="font-lato text-xl border bg-foreground rounded-2xl py-3 px-12 flex items-center gap-2 text-nowrap shadow-md border-fontColor outline-none hover:bg-slate-200 hover:shadow-lg transition-all duration-300"
                >
                    Entre com Google
                    <FcGoogle className="text-4xl" />
                </button>
            </div>
        </div>
    );
}
