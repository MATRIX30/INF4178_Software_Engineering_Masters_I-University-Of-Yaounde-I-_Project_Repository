import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from '@material-ui/icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Typography, useMediaQuery } from '@mui/material';
import "./style.css"

import Logo from '../../assets/logo.png'
import StyledButton from '../Button';

const Header = () => {

    const [userData, setUserData] = useState([])
    const isNonMobileScreens = useMediaQuery("(min-width:990px)");
    const navigate = useNavigate()

    useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		
		setUserData(userInfo)
	}, [])
    
    return (

        // <div className="header">
        //     <Navbar sticky='top' className="header-content">
        //         <div className='container-fluid px-5 py-0'>
        //             <div>
        //                 <Link to="/" className='logo-container'>
        //                     <img src={Logo} alt="Logo" className='logo' width={50} height={50}/> 
        //                     <Typography 
        //                         fontSize={"19px"}>
        //                         AGRILAB<span style={{color:"var(--primary-900)",fontSize:"3rem"}}>.</span>
        //                     </Typography>                               
        //                 </Link>
        //             </div>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar"/>
        //             <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:"var(--white)", padding:"0", justifyContent:"end"}}>
        //                 <Nav>
        //                     <div><Link to='/' className='nav-item'>Home</Link></div>
        //                     <div><Link to='/library' className='nav-item'>Library</Link></div>
        //                 </Nav>
        //                 <StyledButton to="/signin" label="Log In" bg="var(--primary-900)" fg="var(--white)"/>
        //             </Navbar.Collapse>
        //         </div>

        //     </Navbar>
        // </div>
        

        <navbar className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to='/' className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <Link to='/' className="m-0 text-success logo-container">
                    <img src={Logo} alt="Logo" className='logo me-3' width={50} height={50}/> 
                    <span className='mt-3'>
                        AGRILAB
                        <span style={{ color:"var(--primary-900)", }}>.</span>
                    </span> 
                </Link>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/' className="nav-item nav-link">About</Link>
                    <Link to='/library' className="nav-item nav-link">Library</Link>
                    <Link to='/projects' className="nav-item nav-link">Projects</Link>
                </div>
                {
                    userData?.token ?
                        <Link to="/profile" className="btn btn-success py-4 px-lg-5 px-2 my-auto">
                            Profile <ArrowRight className='ms-2' />
                        </Link>
                    :
                        <Link to="/login" className="btn btn-success py-4 px-lg-5 px-2 my-auto">
                            Login <ArrowRight className='ms-2' />
                        </Link>
                }
            </div>
        </navbar>
    )
}

export default Header