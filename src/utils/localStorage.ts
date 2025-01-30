export const loadFromLocalStorage = <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

// export const saveToLocalStorage = (key: string, value: any) => {
//     if (typeof window !== 'undefined') {
//         localStorage.setItem(key, JSON.stringify(value));
//     }
// };
