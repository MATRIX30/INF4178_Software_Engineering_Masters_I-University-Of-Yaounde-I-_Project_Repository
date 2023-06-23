import { createTheme } from "@mui/material/styles";

import colors from '../theme/base/colors'
import boxShadows from "../theme/base/boxShadows";
import borders from "../theme/base/borders";

import boxShadow from "../theme/functions/boxShadow";
import hexToRgb from "../theme/functions/hexToRgb";
import linearGradient from "../theme/functions/linearGradient";
import pxToRem from "../theme/functions/pxToRem";
import rgba from "../theme/functions/rgba";


export default createTheme({
    palette: { ...colors },
    boxShadows: { ...boxShadows },
    borders: { ...borders },
    functions: {
        boxShadow,
        hexToRgb,
        linearGradient,
        pxToRem,
        rgba,
    },
})