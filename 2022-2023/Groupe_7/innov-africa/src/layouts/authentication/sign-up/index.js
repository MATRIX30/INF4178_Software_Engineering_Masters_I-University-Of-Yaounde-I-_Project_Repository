/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import CoverLayout from "layouts/authentication/components/CoverLayout";

import { useEffect, useState } from "react";
import { SignUpCard } from "./components/SignUpCard";

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
      {screenWidth > 767 ? (
        <BasicLayout image={bgImage}>
          <SignUpCard />
        </BasicLayout>
      ) : (
        <CoverLayout coverHeight="45vh" image={bgImage}>
          <SignUpCard />
        </CoverLayout>
      )}
    </>
  );
}

export default Basic;
