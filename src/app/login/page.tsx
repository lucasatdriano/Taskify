import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    return (
        <div className="grid place-items-center w-full">
            <div className="py-4 px-12 rounded-3xl border-2 border-fontColor relative flex">
                <div className="py-10 px-4 flex-1">
                    <h3 className="font-montserrat text-3xl my-8">Cadastro</h3>
                    <button
                        title="4"
                        type="button"
                        className="text-2xl w-full bg-primary rounded-3xl py-4 mb-16 shadow-md outline-none"
                    >
                        Criar uma Conta
                    </button>
                    <button
                        title="4"
                        type="button"
                        className="text-2xl border bg-foreground rounded-3xl py-4 px-12 flex items-center gap-2 text-nowrap shadow-md border-fontColor outline-none"
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
                        <div className="relative h-fit w-fit">
                            <input
                                title="a"
                                type="email"
                                name=""
                                id=""
                                className="text-2xl py-2 indent-4 rounded-xl shadow-md"
                            />
                        </div>
                        <div className="grid place-items-end">
                            <div className="relative h-fit w-fit">
                                <input
                                    title="a"
                                    type="password"
                                    name=""
                                    id=""
                                    className="text-2xl py-2 indent-4 rounded-xl shadow-md"
                                />
                            </div>
                            <p className="text-sm pr-4 text-secundary underline cursor-pointer">
                                Esqueceu sua senha?
                            </p>
                        </div>
                    </div>
                    <button
                        title="4"
                        type="button"
                        className="text-2xl py-3 bg-primary rounded-3xl px-16 shadow-md outline-none"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
