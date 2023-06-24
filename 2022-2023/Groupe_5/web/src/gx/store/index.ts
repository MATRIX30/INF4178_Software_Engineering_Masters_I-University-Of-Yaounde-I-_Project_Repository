import { createStore } from "@dilane3/gx";
import { hospitalSignal } from "../signal/hospital";
import { hospitalTypeSignal } from "../signal/hospitalTypes";
import { modalSignal } from "../signal/modal";
import { userSignal } from "../signal/user";

export const store = createStore([hospitalSignal, hospitalTypeSignal, userSignal, modalSignal]);