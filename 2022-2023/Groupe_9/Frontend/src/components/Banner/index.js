import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import logo from '../../assets/images/logo.png'

export default function Banner(props) {

    const [color, setColor] = useState({});
    const listenScrollEvent = e => {
        if (window.scrollY > 50) {
            setColor({backgroundColor: 'var(--primary)',zIndex:300})
        } else {
            setColor({backgroundColor: 'var(--primary-empty)'})
        }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className="descriptor" >
            <div className='normalizer'>
                <div className='contain'>
                    <div className='top-tasks' style={color}>
                        <img src={logo} alt='Alarm logo'  width={'50px'} style={{cursor:'pointer', borderRadius: 80}}/>
                        <div className='more'>
                            <div style={{ color: 'white'}}>About Us</div>
                            <div style={{backgroundColor:'white', color: 'var(--primary)',marginLeft:'1rem'}}>
                                <Link to={props.path} style={{textDecoration:"none",color:"var(--primary)"}}>
                                    {props.action}
                                </Link>
                            </div>
                        </div>
                    </div>
                    {props.welcome}
                    {props.encourager}
                </div>
            </div>
        </div>
    );
}

