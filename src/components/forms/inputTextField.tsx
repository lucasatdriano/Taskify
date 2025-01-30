type Input = {
    type: string;
    title: string;
    id: string;
    label: string;
};

export default function InputTextField({ type, title, id, label }: Input) {
    return (
        <div className="relative h-fit w-fit font-montserrat">
            <input
                type={type}
                title={title}
                name={id}
                id={id}
                required
                className="peer text-2xl py-2 bg-background indent-4 outline-none shadow-inner rounded-t-xl border-b border-slate-400 focus:border focus:border-fontColor focus:rounded-xl transition-rounded-and-color duration-300"
            />
            <label
                htmlFor={id}
                className="absolute cursor-text left-5 top-1/2 -translate-y-1/2 text-xl bg-background rounded-md px-2 peer-focus:text-base peer-focus:top-0 peer-valid:text-base peer-valid:top-0 transition-all duration-300"
            >
                {label}
            </label>
        </div>
    );
}
