import React from 'react' ;
import { Nav,NavLink,NavMenu,NavBtn,NavBtnLink,} from './navbarElement' ;
                      

const Navbar = () => {
    return(
        <>
        
            <Nav>

                <NavMenu>
                    <NavLink to='/' exact activeStyle>Home </NavLink>
                    <NavLink to='/#'activeStyle> About </NavLink>
                    <NavLink to='/#'activeStyle>Crimes </NavLink>
                    <NavLink to='/register'activeStyle> Register</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
                      
export default Navbar;
                    