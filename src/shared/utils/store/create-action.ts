import { Action } from "shared/types/store";

export function createAction<A extends Action, P = void>(
    type: string,
): (payload?: P) => A {
    return function actionCreator(payload?: P): A {
        return {
            type,
            payload,
        } as A;
    };
}
