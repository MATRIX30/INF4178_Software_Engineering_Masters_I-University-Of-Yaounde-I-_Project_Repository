import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UpdateProfile } from "layouts/profile/updateProfile/index";


export const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/updateProfile" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </>
  );
};
