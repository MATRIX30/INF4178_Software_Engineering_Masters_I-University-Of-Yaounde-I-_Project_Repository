import { createSignal } from "@dilane3/gx"

export type LocationState = {
  lat: number,
  lng: number,
  city: string,
  currentLocation: {
    lat: number,
    lng: number
  } | null
}

export const locationSignal = createSignal<LocationState>({
  name: "location",
  state: {
    lat: 0,
    lng: 0,
    city: "",
    currentLocation: null
  },
  actions: {
    setLocation: (state, payload: { lat: number, lng: number, city: string }) => {
      state.lat = payload.lat
      state.lng = payload.lng
      state.city = payload.city

      return state
    },

    setCurrentLocation: (state, payload: { lat: number, lng: number }) => {
      state.currentLocation = payload

      return state
    }
  }
})