import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ArrowRightAltRounded } from "@material-ui/icons";
import bgImg from '../../assets/images/circleFruit.jpg'

import Box from "../Box/Box";
import CustomTypography from "../typography/CustomTypography";


const DescriptionSection = () => {

    return (
        <Box
            display="flex"
            alignItems="center"
            borderRadius="xl"
            my={10}
            py={6}
            sx={{
                backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                    rgba(gradients.success.state, 0.6),
                    rgba(gradients.success.main, 0.6)
                )}, url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container>
                <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
                    <CustomTypography variant="h4" color="white" fontWeight="bold">
                        Agrilab Multimedia library
                    </CustomTypography>
                    <CustomTypography variant="h1" color="white" mb={1}>
                        Agricultural library
                    </CustomTypography>
                    <CustomTypography variant="body1" color="white" opacity={0.9} mb={2}>
                        Access to our library where articles on modern farming techniques are published 
                        by an expert. This library is a valuable resource for you, the farmer, giving you
                         access to up-to-date information on best farming practices, new technologies, 
                         market trends and more. This will help to strengthen your knowledge and skills 
                         as farmers, and thus promote more productive and sustainable agriculture.
                    </CustomTypography>
                    <Link to='library' className="text-light text-decoration-none fw-medium">
                        Go to library <ArrowRightAltRounded sx={{ fontWeight: "bold" }} />
                    </Link>
                </Grid>
            </Container>
        </Box>
    );
}

export default DescriptionSection;
