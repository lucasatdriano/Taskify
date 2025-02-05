'use client';

import * as Yup from 'yup';
import InputTextField from '@/components/forms/inputTextField';
import userService from '@/services/api/userService';
import { loginValidationSchema } from '@/validations/loginValidation';
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await loginValidationSchema.validate(formData, {
                abortEarly: false,
            });

            const data = await userService.login(
                formData.email,
                formData.password,
            );
            console.log('Usuário logado:', data);
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
                console.error('Usuário não logado:', error);
                setErrors({
                    general: error.message,
                });
            }
        }
    }

    return (
        <div className="grid place-items-center w-full h-svh">
            <div className="py-4 px-12 rounded-3xl border-2 border-fontColor relative flex">
                <div className="py-10 px-4 flex-1">
                    <h3 className="font-montserrat text-3xl mt-8 mb-12">
                        Cadastro
                    </h3>
                    <Link
                        href="/signup"
                        title="Criar uma conta"
                        className="text-xl font-lato bg-primary rounded-3xl py-4 px-16 shadow-md cursor-pointer hover:bg-pink-200 hover:shadow-lg transition-all duration-300"
                    >
                        Criar uma Conta
                    </Link>
                    <button
                        title="Entrar com Google"
                        type="button"
                        className="text-xl font-lato border bg-foreground rounded-3xl py-4 px-12 mt-20 flex items-center gap-2 text-nowrap shadow-md border-fontColor outline-none cursor-pointer hover:bg-slate-200 hover:shadow-lg transition-all duration-300"
                    >
                        Entre com Google
                        <FcGoogle className="text-4xl" />
                    </button>
                </div>
                <div className="relative flex-auto items-center flex flex-col">
                    <h2 className="text-4xl font-poppins bg-background mt-4">
                        Taskify
                    </h2>
                    <hr className="w-[2px] h-full bg-fontColor absolute top-0 left-1/2 -z-10" />
                </div>
                <form onSubmit={handleLogin} className="grid p-10 flex-2 pl-24">
                    <h3 className="font-montserrat text-3xl my-8">Login</h3>
                    <div className="grid gap-6 mb-12">
                        <div className="w-full">
                            <InputTextField
                                type="text"
                                title="Digite seu email"
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
                        <div className="grid place-items-end gap-1">
                            <div className="w-full">
                                <InputTextField
                                    type="password"
                                    title="Digite sua senha"
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
                            <p
                                title="Esqueceu sua senha?"
                                className="text-sm pr-4 text-secundary underline cursor-pointer font-montserrat"
                            >
                                Esqueceu sua senha?
                            </p>
                        </div>
                    </div>
                    <button
                        title="Fazer Login"
                        type="submit"
                        className="text-2xl font-lato py-3 bg-primary rounded-3xl px-16 shadow-md outline-none cursor-pointer hover:shadow-lg hover:bg-pink-200 transition-all duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
