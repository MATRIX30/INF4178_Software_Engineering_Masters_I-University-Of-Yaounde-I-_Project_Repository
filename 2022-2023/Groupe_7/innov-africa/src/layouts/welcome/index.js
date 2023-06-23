// Authentication layout components
//import HomeLayout from "./components/HomeLayout";
import WelcomeLaout from "WelcomeLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HomeLayout from "./components/HomeLayout";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function Welcome() {
  return (
    <HomeLayout>
      <WelcomeLaout>
        <div className="App">
          <Home />
          <About />
          <Work />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </WelcomeLaout>
    </HomeLayout>
  );
}

export default Welcome;
