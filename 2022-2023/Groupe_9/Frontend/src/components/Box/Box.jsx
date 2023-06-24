import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import BoxRoot from "./BoxRoot";

const Box = forwardRef(
    ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => {

        const theme = useTheme()
        return(
            <BoxRoot
                {...rest}
                ref={ref}
                theme={theme}
                ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
            />
        )
    }
);

// Setting default values for the props of MKBox
Box.defaultProps = {
    variant: "contained",
    bgColor: "transparent",
    color: "dark",
    opacity: 1,
    borderRadius: "none",
    shadow: "none",
    coloredShadow: "none",
};

// Typechecking props for the MKBox
Box.propTypes = {
    variant: PropTypes.oneOf(["contained", "gradient"]),
    bgColor: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.number,
    borderRadius: PropTypes.string,
    shadow: PropTypes.string,
    coloredShadow: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "none",
    ]),
};

export default Box;
