'use client';

import { useEffect, useState } from 'react';

type Input = {
    type: string;
    title: string;
    name: string;
    id: string;
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputTextField({
    type,
    title,
    name,
    id,
    value,
    label,
    onChange,
}: Input) {
    const [hasText, setHasText] = useState(false);

    useEffect(() => {
        setHasText(value.length > 0);
    }, [value]);

    return (
        <div className="relative h-fit w-fit font-montserrat">
            <input
                type={type}
                title={title}
                name={name}
                id={id}
                value={value}
                required
                className="peer text-2xl py-2 bg-background indent-4 outline-none shadow-inner rounded-t-xl border-b border-slate-400 focus:border focus:border-fontColor focus:rounded-xl transition-rounded-and-color duration-300"
                onChange={onChange}
                placeholder=" "
            />
            <label
                htmlFor={id}
                className={`absolute cursor-text select-none left-5 bg-background rounded-md px-2 transition-all duration-300 
                    ${hasText || value ? 'text-base -top-3' : 'text-xl top-3'}
                    peer-focus:text-base peer-focus:-top-3`}
            >
                {label}
            </label>
        </div>
    );
}
