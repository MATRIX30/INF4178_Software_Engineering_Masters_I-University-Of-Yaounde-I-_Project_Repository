import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Eco, MonetizationOnRounded } from "@material-ui/icons";
import FilledInfoCard from "./FilledInfoCard";
import logo from '../../assets/logoWhite.png'


const BeforeFooter = () => {

    return (
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -7,
                    mb: 9,
                    // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={4}>
                            <FilledInfoCard
                                variant="gradient"
                                color="success"
                                icon={
                                    <img src={logo} alt="" width={50} height={50}/>
                                }
                                title="AGRILAB Platform"
                                description="this platform link agricultural investors and African farmers. In addition to that, we offer a library where articles on modern agricultural techniques will be published by an expert."
                                action={{
                                    type: "external",
                                    route: "login",
                                    label: "Login",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <FilledInfoCard
                                color="success"
                                icon={
                                    <MonetizationOnRounded style={{ color: '#229f0d', fontSize: 60 }} />
                                }
                                title="Investors"
                                description="Explore the investment opportunities offered by African farmers registered on the platform. You'll have access to farmers' profiles, their projects and their specific financing needs."
                                action={{
                                    type: "external",
                                    route: "signup",
                                    label: "Signup as an Investor",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <FilledInfoCard
                                color="success"
                                icon={
                                    <Eco style={{ color: '#229f0d', fontSize: 60 }} />
                                }
                                title="Farmers"
                                description="Present your farming activities, projects and financing needs to investors interested in Africa's agricultural sector."
                                action={{
                                    type: "external",
                                    route: "signup",
                                    label: "Signup as a Farmer",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            
            </Card>
    );
}

export default BeforeFooter;
