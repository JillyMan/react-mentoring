export interface Action<T = string, P = object | undefined> {
    type: T;
    payload: P;
}
