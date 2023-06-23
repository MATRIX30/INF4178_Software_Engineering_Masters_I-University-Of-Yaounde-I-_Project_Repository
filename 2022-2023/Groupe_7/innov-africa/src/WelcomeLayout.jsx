import { getUser } from "api";
import { useEffect, useState } from "react";
import { Navigate as Redirect } from "react-router-dom";

export default function WelcomeLaout({ children }) {
  // TO DO: verifier le user dans le Global State

  // temp (localStorage)
  const currentuser = localStorage.getItem("currentuser");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentuser) {
      setLoading(false);
    }
    console.log(loading);
  }, []);

  return <>{!loading ? <Redirect to="/accueil" /> : children}</>;
}
