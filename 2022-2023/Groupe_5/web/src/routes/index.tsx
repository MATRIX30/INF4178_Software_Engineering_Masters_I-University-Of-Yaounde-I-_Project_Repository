// import { useEffect } from "react";
import { useActions } from "@dilane3/gx";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, 
  // useNavigate
 } from "react-router-dom";
import User from "../entities/User";
import SignIn from "../pages/auth/signin";
import Home from "../pages/home";
import Profile from "../pages/profile";
// import { getCookie } from "../utils/Functions";

type AuthProps = {
  children: JSX.Element,
}

const Auth = ({ children }: AuthProps) => {
  
  // const navigate = useNavigate();

  const { loadUser } = useActions('user', 'loadUser');
  
  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    
    if(storedUser) {
      const temp = JSON.parse(storedUser);
      const user = new User(temp.id, temp.name, temp.avatar, temp.email);
      loadUser(user);
    }

    // console.log(getCookie('connect.sid'));

    // if(!getCookie('connect.sid')) {
    //   navigate('/auth/signin');
    // }
  
    return () => {
      console.log("Unmounted");
    }
  }, []);
  
  return (
    <>
      {children}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Auth>
      <Home />
    </Auth>
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: 
    <Auth>
      <Profile />
    </Auth>
  }
]);


export default function Router() {
  return (<RouterProvider router={router} />)
}
