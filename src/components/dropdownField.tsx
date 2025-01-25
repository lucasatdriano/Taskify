import { IconType } from 'react-icons';

type DropdownFieldProps = {
    listItems: Array<{
        icon: IconType;
        title: string;
        onDropdownFunction: () => boolean;
    }>;
    dropdownToggle: boolean;
};

export default function DropdownField({
    listItems,
    dropdownToggle,
}: DropdownFieldProps) {
    return (
        <div
            className={`bg-foreground shadow-md py-4 rounded-xl w-fit box-border absolute right-12 top-28 transition-all duration-500 overflow-y-hidden z-50 ${
                dropdownToggle ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <ul>
                {listItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={item.onDropdownFunction}
                        className="flex font-montserrat items-center gap-3 text-xl border-r-4 border-r-transparent cursor-pointer hover:bg-slate-100 py-2 px-6 transition-all duration-200 rounded-lg hover:shadow-sm hover:border-r-4 hover:border-r-primary"
                    >
                        <item.icon className="text-4xl" />
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
