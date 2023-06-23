import { createSignal } from "@dilane3/gx";

export const modalSignal = createSignal<boolean>({
    name: 'modal',
    state: false,
    actions: {
        toggleShowModal: (state, payload: boolean) => {
            state = payload;
            return state;
        },
    }
});