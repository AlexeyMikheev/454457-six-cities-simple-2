export interface MapperInterface<T> {
    mapToItem(values: string[]): T;
}
