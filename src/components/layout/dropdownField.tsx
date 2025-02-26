'use client';

import { useEffect, useRef } from 'react';
import { IconType } from 'react-icons';

interface DropdownFieldProps {
    listItems: Array<{
        icon: IconType;
        title: string;
        onDropdownFunction: () => void;
    }>;
    dropdownToggle: boolean;
    setDropdownToggle: (state: boolean) => void;
    onSort?: (option: string, sortFunction: () => void) => void;
    selectedOption?: string | null;
}

export default function DropdownField({
    listItems,
    dropdownToggle,
    setDropdownToggle,
    onSort,
    selectedOption,
}: DropdownFieldProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownToggle(false);
            }
        }

        if (dropdownToggle) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownToggle, setDropdownToggle]);

    return (
        <div
            ref={dropdownRef}
            className={`bg-foreground shadow-md py-4 rounded-xl w-fit box-border absolute right-12 top-28 transition-all duration-500 overflow-y-hidden z-50 ${
                dropdownToggle ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <ul>
                {listItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() =>
                            onSort &&
                            onSort(item.title, item.onDropdownFunction)
                        }
                        className={`flex font-montserrat items-center gap-3 text-xl border-r-4 border-r-transparent cursor-pointer py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary
               ${
                   item.title === selectedOption && 'bg-gray-200 text-secundary'
               }`}
                    >
                        <item.icon className="text-4xl" />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
