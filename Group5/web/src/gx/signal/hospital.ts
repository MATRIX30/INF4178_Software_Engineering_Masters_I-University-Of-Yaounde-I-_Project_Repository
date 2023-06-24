import { createSignal } from "@dilane3/gx";
import Hospital from "../../entities/Hospital";

export type HospitalState = {
    hospitals: Hospital[],
    selectedHospital: Hospital | null,
    searchHospitalText: string,
    hospitalsLoading: boolean
}

export const hospitalSignal = createSignal<HospitalState>({
    name: 'hospitals',
    state: <HospitalState> {
        hospitals: [],
        selectedHospital: null,
        searchHospitalText: "",
        hospitalsLoading: false
    },
    actions: {
        loadHospitals: (state, payload: Hospital[]) => {
            return { ...state, hospitals: payload };
        },

        setLoading: (state, payload: boolean) => {
            return { ...state, hospitalsLoading: payload };
        },

        selectHospital: (state, payload: Hospital) => {
            return { ...state, selectedHospital: payload };
        },

        addHospital: (state, payload: Hospital) => {
            console.log("executed");
            
            return { ...state, hospitals: [...state.hospitals, payload] }
        },

        removeHospital: (state, payload: string ) => {
            return { ...state, hospitals: state.hospitals.filter((hospital) => hospital.id != payload) }
        },

        updateHospital: (state, payload: { index: number, modifiedHospital: Hospital }) => {

            const modifiedHospitalsList = state.hospitals;

            modifiedHospitalsList.forEach((hospital: Hospital, index: number) => {
                if(index == payload.index) {
                    hospital.Id = payload.modifiedHospital.id;
                    hospital.Name = payload.modifiedHospital.name;
                    hospital.Notice = payload.modifiedHospital.notice;
                    hospital.Images = payload.modifiedHospital.images;
                    hospital.PhoneNumber = payload.modifiedHospital.phoneNumber;
                    hospital.Website = payload.modifiedHospital.website;
                    hospital.Address = payload.modifiedHospital.address;
                    hospital.Cost = payload.modifiedHospital.cost;
                }
            })

            return { ...state, hospitals: modifiedHospitalsList }
        },

        searchHospital: (state, payload: string) => {
            return { ...state, searchHospitalText: payload.toLowerCase().trim() }
        }
    }
});