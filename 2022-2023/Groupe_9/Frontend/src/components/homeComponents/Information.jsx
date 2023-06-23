import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "../Box/Box";
import { LocalLibrary, MonetizationOn, SelectAll, TouchApp } from "@material-ui/icons";
import EcoIcon from '@material-ui/icons/Eco';
import RotatingCard from "./rotatingCard/RotatingCard";
import RotatingCardFront from "./rotatingCard/RotatingCardFront";
import RotatingCardBack from "./rotatingCard/RotatingCardBack";
import DefaultInfoCard from "./rotatingCard/DefaultInfoCard";

import bgFront from "../../assets/images/apple.jpg";
import bgBack from "../../assets/images/poivron.jpg";
import logo from "../../assets/logoWhite.png"


const Information = () => {

    return (
        <Box component="section" py={4} my={4}>
            <Container>
                <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
                <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
                    <RotatingCard>
                        <RotatingCardFront
                            image={bgFront}
                            icon={
                                <img src={logo} alt="" width={70} height={70}/>
                            }
                            title={
                                <>
                                    Find the best investor
                                </>
                            }
                            description="Find investors to finance your farming project."
                        />
                        <RotatingCardBack
                            image={bgBack}
                            title="For investors"
                            description="Find agricultural projects to invest for."
                            action={{
                                type: "internal",
                                route: "/sections/page-sections/page-headers",
                                label: "start with header",
                            }}
                        />
                    </RotatingCard>
                </Grid>
                <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <DefaultInfoCard
                            icon={
                                <EcoIcon style={{ fontSize: 40, color: '#229f0d' }} />
                            }
                            title="Post agricultural project"
                            description="loremipsum dolor sit amet consecturloremipsum dolor sit amet consectur loremipsum dolor sit amet consectur."
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DefaultInfoCard
                            icon={
                                <LocalLibrary style={{ fontSize: 40, color: '#229f0d' }} />
                            }
                            title="Get documents to learn agricultural methods"
                            description="loremipsum dolor sit amet consecturloremipsum dolor sit amet."
                        />
                    </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
                    <Grid item xs={12} md={6}>
                        <DefaultInfoCard
                            icon={
                                <SelectAll style={{ fontSize: 40, color: '#229f0d' }} />
                            }
                            title="Select your favorite projects"
                            description="loremipsum dolor sit amet consecturloremipsum dolor sit amet consectur."
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DefaultInfoCard
                            icon={
                                <MonetizationOn style={{ fontSize: 40, color: '#229f0d' }} />
                            }
                            title="Raise Funds"
                            description="loremipsum dolor sit amet consecturloremipsum dolor sit amet consectur loremipsum dolor sit amet."
                        />
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Information;
