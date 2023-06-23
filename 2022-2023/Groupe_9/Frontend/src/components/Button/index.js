
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// Page style
import './style.css';

export default function StyledButton(props) {
    const navigate = useNavigate()

    return (
        <div>
            <Button style={{backgroundColor:props.bg}} className='custom-btn' variant="outline" onClick={() => {navigate(props.to)}}><span><Link to={props.to} style={{textDecoration:'none', color:props.fg, fontSize:"17px", fontWeight:"700", backgroundColor:props.bg}}>{props.label}</Link></span></Button>
        </div>
        
    );
}