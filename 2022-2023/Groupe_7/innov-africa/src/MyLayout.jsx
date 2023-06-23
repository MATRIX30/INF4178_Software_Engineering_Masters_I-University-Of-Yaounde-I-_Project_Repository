import { getUser } from "api";
import { useEffect, useState } from "react";
import { Navigate as Redirect } from "react-router-dom";

export default function MyLayout({ children }) {
  // TO DO: verifier le user dans le Global State

  // temp (localStorage)
  const token = localStorage.getItem("token");
  const currentuser = localStorage.getItem("currentuser");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token && !currentuser) {
      handleGetUser();
    } else {
      setLoading(false);
    }
  }, []);

  // get user by token
  const handleGetUser = async () => {
    const response = await getUser(token);
    if (response.data) {
      // TO DO: save in gloabal state

      // temp
      localStorage.setItem(
        "currentuser",
        JSON.stringify(response.data.currentuser)
      );
    }
    setLoading(false);
  };

  return (
    <>
      {!loading ? (
        currentuser ? (
          children
        ) : (
          <Redirect to="/authentication/sign-in" />
        )
      ) : (
        "loading..."
      )}
    </>
  );
}
