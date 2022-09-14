export interface MapperInterface<T> {
    mapToItem(data: string): T;
    mapToString(data: T): string;
}
