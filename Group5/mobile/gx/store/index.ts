import { createStore } from "@dilane3/gx"
import { hospitalsSignal } from "../signals/hospitals";
import { locationSignal } from "../signals/location";
import { termsSignal } from "../signals/terms";

export default createStore([locationSignal, termsSignal, hospitalsSignal]);