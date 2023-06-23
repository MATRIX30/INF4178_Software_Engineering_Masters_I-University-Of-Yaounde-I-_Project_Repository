import { createSignal } from "@dilane3/gx";
import HospitalType from "../../entities/HospitalType";


export const hospitalTypeSignal = createSignal<Array<HospitalType>>({
    name: 'hospitalTypes',
    state: [],
    actions: {
        loadHospitalTypes: (state, payload: HospitalType[]) => {
            state = payload;
            return state;
        },
    }
});