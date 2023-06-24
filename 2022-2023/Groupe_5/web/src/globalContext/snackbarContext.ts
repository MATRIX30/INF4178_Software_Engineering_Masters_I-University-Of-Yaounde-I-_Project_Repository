import { createContext } from "react";

export type SnackbarContextType = {
    showSnackBar: (text: string, isSuccess?: boolean) => void
}

export const SnackbarContext = createContext<SnackbarContextType>({
    showSnackBar: (text: string, isSuccess?: boolean) => {
        console.log(text, isSuccess);
    }
});