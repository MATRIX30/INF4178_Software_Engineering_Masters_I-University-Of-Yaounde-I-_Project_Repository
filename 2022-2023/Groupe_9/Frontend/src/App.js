// React imports
import {BrowserRouter, Route, Routes}  from "react-router-dom"

// Pages
import Home from "./pages/home";
import Registration from './pages/Registration'
import ScalePreference from "./pages/ScalePreference";
import Library from "./pages/Library";
import ProjectsPage from "./components/projects/ProjectsPage";
import Profile from "./pages/Profile";
import ProjectDescription from "./components/projects/ProjectDescription";
// import LogIn from "./pages/logIn";
// import SignUp from "./pages/signUp";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import Theme from './components/theme/Theme'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './styles/style.css'


function App() {
  return (
    <ThemeProvider theme={Theme}>
        <BrowserRouter>
            <Routes>
                {/* <Route index element={<LogIn/>} /> */}
                {/* <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/log-in' element={<LogIn/>}/>*/}
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<Registration />}/> 
                <Route path='/login' element={<Registration />}/> 
                <Route path='/scale' element={<ScalePreference />}/>
                <Route path='/library' element={<Library />}/>  
                <Route path='/projects' element={<ProjectsPage />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/project/:id' element={<ProjectDescription />}/>                  
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
