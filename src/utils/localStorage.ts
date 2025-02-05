class localStorageUtil {
    static set<T>(key: string, value: T): void {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error(
                `Erro ao salvar item em localStorage (${key}):`,
                error,
            );
        }
    }

    static get<T>(key: string): T | null {
        try {
            const item = localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : null;
        } catch (error) {
            console.error(`Erro ao ler o localStorage (${key}):`, error);
            return null;
        }
    }

    static remove(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(
                `Erro ao remover item do localStorage (${key}):`,
                error,
            );
        }
    }

    static clear(): void {
        try {
            localStorage.clear();
        } catch (error) {
            console.error(`Erro ao limpar localStorage:`, error);
        }
    }
}

export default localStorageUtil;
