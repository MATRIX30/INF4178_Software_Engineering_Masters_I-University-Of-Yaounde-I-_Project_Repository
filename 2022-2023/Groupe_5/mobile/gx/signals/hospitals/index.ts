import { createSignal } from "@dilane3/gx";
import Hospital from '../../../entities/hospital';

export type HospitalState = {
  hospitals: Hospital[];
  loading: boolean;
  selectedHospital: Hospital | null;
  ahpResults: Hospital[]
}

export const hospitalsSignal = createSignal<HospitalState>({
  name: "hospitals",
  state: {
    hospitals: [],
    loading: true,
    selectedHospital: null,
    ahpResults: []
  },
  actions: {
    setHospitals: (state, payload: Hospital[]) => {
      state.hospitals = payload;
      state.loading = false;

      return state;
    },

    selectHospital: (state, payload: Hospital) => {
      state.selectedHospital = payload;

      return state;
    },

    setAhpResults: (state, payload: Hospital[]) => {
      state.ahpResults = payload

      return state;
    }
  }
})