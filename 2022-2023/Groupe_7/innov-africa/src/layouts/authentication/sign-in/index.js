/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useEffect, useState } from "react";
import { SignInCard } from "./components/SignInCard";

function Basic() {
  // obtain screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handelResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handelResize);
    return () => window.removeEventListener("resize", handelResize);
  }, []);

  return (
    <>
      {/* {screenWidth > 767 ? (
        <BasicLayout image={bgImage}>
          <SignInCard />
        </BasicLayout>
      ) : (
        <CoverLayout coverHeight="45vh" image={bgImage}>
          <SignInCard />
        </CoverLayout>
      )} */}
      <CoverLayout coverHeight="45vh" image={bgImage}>
        <SignInCard />
      </CoverLayout>
    </>
  );
}

export default Basic;
