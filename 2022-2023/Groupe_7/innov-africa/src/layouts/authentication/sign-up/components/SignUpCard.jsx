// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { useEffect, useState } from "react";
import { Alert, AlertTitle, Tooltip, Zoom } from "@mui/material";
import { getProfiles } from "api";
import { ByAdmin, ByDirector, BySuperAdmin } from "./SingUpForms";
import { UserBtn } from "layouts/authentication/common/Buttons";

export const SignUpCard = () => {
  // profile list
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    loadingProfiles();
  }, []);

  // get profiles
  const loadingProfiles = async () => {
    const response = await getProfiles();
    console.log(response.data);
    setProfiles(response.data);
  };

  const pColor = "var(--secondaryColor)";
  const [profile, setProfile] = useState(null);
  const [profileId, setProfileId] = useState(null);

  return (
    <Card>
      <MDBox
        // variant="gradient"
        bgColor="primary"
        borderRadius="lg"
        coloredShadow="primary"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h2" fontWeight="medium" color="white" mt={1}>
          Inscription
        </MDTypography>
        <small className="desc-auth-page text-white mt-1">
          Rajoignez la communauté et tracez votre chemin 😎
        </small>
      </MDBox>
      <MDBox pt={2} pb={3} px={3}>
        <MDBox>
          {profiles.length === 0 ? (
            <Alert className="w-100 text-start" severity="warning">
              <AlertTitle>Warning</AlertTitle>
              Erreur lors du chargemnet des types de comptes d'utilisateurs à
              ajouter
            </Alert>
          ) : (
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-1">
              {profiles.map((prof) => (
                <span>
                  <UserBtn
                    type={prof.name}
                    selType={profile}
                    text={prof.name}
                    // icon={user.icon}
                    color={pColor}
                    onclickAction={() => {
                      setProfile(prof.name);
                      setProfileId(prof.id);
                    }}
                  />
                </span>
              ))}
            </div>
          )}
          {profileId === null && profiles.length !== 0 && (
            <span className="info-text">
              Selectionnez le type de compte désiré
            </span>
          )}

          {profile === "student" ? (
            <ByAdmin pColor={pColor} profileId={profileId} profile={profile} />
          ) : (
            <BySuperAdmin
              pColor={pColor}
              profileId={profileId}
              profile={profile}
            />
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
};
