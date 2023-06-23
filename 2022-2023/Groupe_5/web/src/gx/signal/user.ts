import { createSignal } from "@dilane3/gx";
import User from "../../entities/User";

export const userSignal = createSignal<User | null>({
    name: 'user',
    state: null,
    actions: {
        loadUser: (state, payload: User) => {
            state = payload;
            return state;
        },
    }
});