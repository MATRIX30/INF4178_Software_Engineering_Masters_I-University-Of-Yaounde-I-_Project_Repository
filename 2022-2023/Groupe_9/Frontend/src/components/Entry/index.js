
import PhoneInput from 'react-phone-number-input/input'
import './style.css';

export default function DarkEntry(props) {

    return (
        <div className={`entry-container ${props.stylizingEC}`}>
            <div className={`entry-icon ${props.stylizingEI}`}>
                {props.isImage ? 
                    <img src={props.icon} alt={props.label} width={"30px"}/>:
                    <>{props.muIcon}</>
                }
            </div>
            {
                props.isPhone ?
                    <PhoneInput
                    placeholder={props.label}
                    country="CM"
                    onChange={props.handler}
                    className={`input-area ${props.stylizingI}`} />
                :
                <>
                    <input onChange={props.handler} type={props.type} className={`input-area ${props.stylizingI}`} id={props.identifier} required/>
                    <label for={props.identifier} className={`label ${props.stylizingL}`}>{props.label}</label>
                    {props.isPasswordEntry}
                </>
            }
        </div>
        
    );
}