import InputTextField from '@/components/forms/inputTextField';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    return (
        <div className="grid place-items-center w-full">
            <div className="py-4 px-16 rounded-3xl border-2 border-fontColor relative grid place-items-center">
                <h2 className="text-4xl font-poppins bg-background mt-4">
                    Seja Bem-Vindo
                </h2>

                <form className="grid w-full py-12 items-center">
                    <h3 className="font-montserrat text-3xl my-8 text-center">
                        Cadastro
                    </h3>
                    <div className="grid gap-6 mb-12 justify-center">
                        <InputTextField
                            type="text"
                            title="Digite um nome de usuário"
                            id="inputUser"
                            label="Nome de usuário"
                        />
                        <InputTextField
                            type="email"
                            title="Digite um email"
                            id="inputEmail"
                            label="Email"
                        />
                        <InputTextField
                            type="password"
                            title="Digite uma senha"
                            id="inputPassword"
                            label="Senha"
                        />
                        <div className="grid place-items-start gap-1">
                            <InputTextField
                                type="password"
                                title="Confime sua senha"
                                id="inputConfirmPassword"
                                label="Confirme sua senha"
                            />
                            <p className="flex items-center gap-2 text-sm pl-4\">
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
                            </p>
                        </div>
                    </div>
                    <button
                        title="Fazer Cadastro"
                        type="button"
                        className="font-lato text-2xl py-3 bg-primary rounded-3xl w-full shadow-md outline-none hover:bg-pink-200 hover:shadow-lg transition-all duration-300"
                    >
                        Cadastrar
                    </button>
                </form>
                <Link
                    href="/login"
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
