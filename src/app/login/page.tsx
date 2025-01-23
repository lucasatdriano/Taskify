import InputTextField from '@/components/inputTextField';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    return (
        <div className="grid place-items-center w-full">
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
                <form className="grid p-10 flex-2 pl-24">
                    <h3 className="font-montserrat text-3xl my-8">Login</h3>
                    <div className="grid gap-6 mb-12">
                        <InputTextField
                            type="email"
                            title="Digite seu email"
                            id="inputEmail"
                            label="Email"
                        />
                        <div className="grid place-items-end gap-1">
                            <InputTextField
                                type="password"
                                title="Digite sua senha"
                                id="inputPassword"
                                label="Senha"
                            />
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
                        type="button"
                        className="text-2xl font-lato py-3 bg-primary rounded-3xl px-16 shadow-md outline-none cursor-pointer hover:shadow-lg hover:bg-pink-200 transition-all duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
