import { useEffect, useState } from "react";
import SnackBar from "../components/snackbar";
import { SnackbarContext } from "./snackbarContext"

type Props = {
    children: JSX.Element
}

type SnackbarState = {
    success: boolean,
    snackText: string,
}

const SnackBarProvider = ({ children }: Props) => {

    const [snackState, setSnackState] = useState<SnackbarState>({
        success: false,
        snackText: '',
    })

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSnackState({
                success: false,
                snackText: '',
            });
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [snackState.success]);

    const handleClick = (text: string, isSuccess = false) => {
        console.log("done");
        
        setSnackState({ snackText: text, success: isSuccess });
    };

    const value = {
        showSnackBar: handleClick
    }

    return (
        <SnackbarContext.Provider value={value}>
            {children}
            <SnackBar success={snackState.success} snackText={snackState.snackText} />
        </SnackbarContext.Provider>
    )
}

export default SnackBarProvider;