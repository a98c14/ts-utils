export {};
declare global {
    interface DataView {
        getString(byteOffset: number): string;
        setString(byteOffset: number, value: string): void;
    }

    interface Array<T> {
        shuffle(): Array<T>;
        take(count: number): Array<T>;
    }
}
