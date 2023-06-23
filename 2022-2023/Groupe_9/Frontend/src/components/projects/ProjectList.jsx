import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "../Box/Box";
import CustomTypography from "../typography/CustomTypography";
import ProjectBox from "./ProjectBox";
//import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import img from "../../assets/images/apple.jpg";
import sky from "../../assets/images/sky.jpg";

const classes = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(34, 159, 13, .5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: 5,
        borderRadius: 8
    },
}


function ProjectList() {

    return (
        <Box component="section" py={10}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <ProjectBox
                        image={img}
                        title="Rover raised $65 million"
                        description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                        action={{
                            type: "internal",
                            route: "#",
                            color: "success",
                            label: "read more",
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <ProjectBox
                        image={img}
                        title="MateLabs machine learning"
                        description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                        action={{
                            type: "internal",
                            route: "#",
                            color: "success",
                            label: "read more",
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <ProjectBox
                            image={img}
                            title="MateLabs machine learning"
                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                            action={{
                                type: "internal",
                                route: "#",
                                color: "success",
                                label: "read more",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <div style={classes.container}>
                            <div style={classes.overlay}>
                                <p className="fs-5 text-center mx-lg-3">
                                    Want to get many projects ?
                                </p>
                                <Link to='/projects' className="px-4 py-2 rounded text-success bg-light text-decoration-none">
                                    All projects
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProjectList;
