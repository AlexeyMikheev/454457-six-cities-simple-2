export interface MapperInterface<T> {
    mapToModel(data: string): T;
    mapToString(data: T): string;
}
