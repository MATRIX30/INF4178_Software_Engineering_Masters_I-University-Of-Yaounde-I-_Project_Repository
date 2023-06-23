// React import
import {React} from "react-router-dom";
import { Typography, useMediaQuery } from "@mui/material";

// Header and Footer
import Header from "../components/Header";
import Footer from "../components/footer/Footer";

// Home content
import ProjectList from "../components/projects/ProjectList";
import Services from "../components/homeComponents/about/Services";
import Information from "../components/homeComponents/Information";
import DescriptionSection from "../components/homeComponents/DescriptionSection";
import BeforeFooter from "../components/homeComponents/BeforeFooter";
import ExpertList from "../components/homeComponents/experts/ExpertList";
import Testimonials from "../components/homeComponents/testimonials/Testimonials";

// Page style
import "../styles/home.css"
import StyledButton from "../components/Button";
import img from "../assets/logo.png"


const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:990px)");

  return (
    <div className="home p-0">
        <Header />
        <div className="home-main">
          <div className="home-presenter pb-5" style={{height:"100vh"}}>
            <div className="home-normalizer">
              <div className="home-intro px-lg-5 px-2">
                  <Typography 
                    textAlign={"start"}
                    width={"100%"}
                    fontSize={"3rem"}
                    fontWeight={700}
                    color={"var(--white)"}
                    margin={"0.3rem 0"}
                  >
                      WELCOME TO AGRILAB
                  </Typography>
                  <Typography
                    textAlign={"start"}
                    width={"100%"}
                    style={isNonMobileScreens?{fontSize:"1.5rem"}:{fontSize:"1.2rem"}}
                    fontWeight={300}
                    color="var(--white)"
                    letterSpacing={"0.2rem"}
                    marginBottom={"4rem"}
                  >
                    Nous sommes un service immobilier dynamique, productif et esthetique, dans lequelle vous trouverez forcement ce que vous recherchez.
                  </Typography>
                  <div style={{ width:"100%", display:"flex", alignItems:"start", justifyContent:"start"}}>
                    <StyledButton to="/" label="GET STARTED" bg="var(--white)" fg="var(--primary-900)"/>
                  </div>
              </div>
            </div>
          </div>
          {/* <div className="main-1">
            <div className="box-1 pt-5 rounded">
              <Typography 
                textAlign={"start"}
                width={"100%"}
                fontSize={"2rem"}
                fontWeight={500}
                color={"var(--white)"}
                margin={"10px"}>WHY CHOOSE AGRILAB ?</Typography>
              <Typography
                textAlign={"start"}
                width={"100%"}
                style={isNonMobileScreens?{fontSize:"1.5rem"}:{fontSize:"1.2rem"}}
                fontWeight={300}
                color="var(--white)"
                margin={"1rem 0"}>We are glad to se bla bla bla bla ......................................</Typography>
            </div>
            <div className="box-2"> 
              <div className="rounded">
                <aside>
                  <img src={img} alt="" width={70} height={70}/>
                </aside>
                <Typography 
                  className="titles"
                  width={"100%"}
                  fontSize={"19px"}
                  fontWeight={500}
                  align="center"
                >
                  Farmers
                </Typography>
              </div>
              <div className="rounded">
                <aside>
                  <img src={img} alt="" width={70} height={70}/>
                </aside>
              <Typography 
                className="titles"
                width={"100%"}
                fontSize={"19px"}
                fontWeight={500}
                align="center"
              >
                Investors
              </Typography>
              </div>
              <div className="rounded">
                <aside>
                  <img src={img} alt="" width={70} height={70}/>
                </aside>
              <Typography 
                className="titles"
                width={"100%"}
                fontSize={"19px"}
                fontWeight={500}
                align="center"
              >
                Learners
              </Typography>
              </div>
            </div>
          </div> */}

          <ProjectList />
          
          <Services />

          <Information />

          <DescriptionSection />

          <BeforeFooter />

          <aside className="mt-5">
            <img src={img} alt="" width={70} height={70}/>
          </aside>

          <ExpertList />

          <aside className="mt-5">
            <img src={img} alt="" width={70} height={70}/>
          </aside>

          <Testimonials />

        </div>
        <Footer />
    </div>
  );
};

export default Home;
