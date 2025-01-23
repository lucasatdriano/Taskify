import InputTextField from '@/components/inputTextField';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    return (
        <div className="grid place-items-center w-full">
            <div className="py-4 px-16 rounded-3xl border-2 border-fontColor relative grid place-items-center">
                <h2 className="text-4xl font-poppins bg-background mt-4">
                    Seja Bem-Vindo
                </h2>

                <form className="grid flex-2 pb-20 pt-12">
                    <h3 className="font-montserrat text-3xl my-8">Cadastro</h3>
                    <div className="grid gap-6 mb-12">
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
                        className="text-2xl py-3 bg-primary rounded-3xl px-16 shadow-md outline-none"
                    >
                        Cadastrar
                    </button>
                </form>
                <button
                    title="Entrar com Google"
                    type="button"
                    className="text-xl border bg-foreground rounded-3xl py-4 px-12 flex items-center gap-2 text-nowrap shadow-md border-fontColor outline-none"
                >
                    Entre com Google
                    <FcGoogle className="text-4xl" />
                </button>
            </div>
        </div>
    );
}
