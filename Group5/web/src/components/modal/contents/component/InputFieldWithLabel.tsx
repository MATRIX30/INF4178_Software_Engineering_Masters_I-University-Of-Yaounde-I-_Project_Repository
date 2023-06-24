import { ChangeEvent } from 'react'
import styles from '../../styles/createdHospital.module.css'
import CustomErrorsComponent from './customErrorsComponent'

type InputProps = {
    errorMessage: string,
    hasError: boolean,
    placeholder: string,
    value: string | number | readonly string[] | undefined,
    onChangeFunction: (e: ChangeEvent<HTMLInputElement>) => void,
    inputType?: string,
    labelText: string,
    inputName: string
}

const InputFieldWithLabel = ({ 
    errorMessage,
    hasError,
    placeholder,
    value,
    onChangeFunction,
    inputType = "text",
    labelText,
    inputName
    }: InputProps) => {
    
        return (
        <div className={styles.form_inputs}> 
            <label htmlFor={inputName} className={styles.form_labels}>
                {/* Nom de l'hopital */}
                {labelText}
            </label>
            <input
                // id="name"
                id={inputName}
                name={inputName} 
                type={inputType}  
                className={styles.inputs}
                // placeholder="nom de l'hopital"
                placeholder={placeholder}
                // value={values.hospitalName}
                value={value}
                // onChange={(event) => setValues({...values , hospitalName:event.currentTarget.value.toLocaleLowerCase().trim()})}
                onChange={(e) => onChangeFunction(e)}
            />
            {/* <CustomErrorsComponent hasError={errors.hospitalName} errorDesc={"veuillez entrer le nom de l'hopital"} /> */}
            <CustomErrorsComponent hasError={hasError} errorDesc={errorMessage} />
        </div>
    )
}

export default InputFieldWithLabel