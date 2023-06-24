import { useContext, useEffect, useRef, useState } from 'react'
import styles from '../styles/createdHospital.module.css'
import Button from "../../../components/buttons"
import { MdCloudUpload } from "react-icons/md"
import Hospital from '../../../entities/Hospital';
import { capitalizeFirstLetter } from '../../../utils/Functions';
import CustomErrorsComponent from './component/customErrorsComponent';
import { useActions, useSignal } from '@dilane3/gx';
import Address from '../../../entities/Address';
import InputFieldWithLabel from './component/InputFieldWithLabel';
import { Fade } from '@mui/material';
import { SnackbarContext, SnackbarContextType } from '../../../globalContext/snackbarContext';
import HospitalType from '../../../entities/HospitalType';
import { createHospital } from '../../../api/hospital';

type FormValueType = {
  hospitalName: string,
  ville: string,
  quartier: string,
  type: string,
  telephone: string,
  prix: string,
  longitude: string,
  latitude: string,
  boitePostale: string,
  site: string,
  image: null | File
}

type FormValueErrorType = {
  hospitalName: boolean,
  ville: boolean,
  quartier: boolean,
  type: boolean,
  telephone: boolean,
  prix: boolean,
  longitude: boolean,
  latitude: boolean,
  boitePostale: boolean,
  site: boolean,
  image: boolean
}

const initialFormErrors: FormValueErrorType = { 
  hospitalName: false,
  ville: false,
  quartier: false,
  type: false,
  telephone: false,
  prix: false,
  longitude: false,
  latitude: false,
  boitePostale: false,
  site: false,
  image: false
}

const initialFormValues: FormValueType = {
  hospitalName:'',
  ville:'',
  quartier:'',
  type: '',
  telephone:'',
  prix:'',
  longitude:'',
  latitude:'',
  boitePostale:'',
  site:'',
  image: null
}
export default function CreateHospital() {

  const inputDivRef = useRef<HTMLInputElement>(null);

  const { addHospital } = useActions("hospitals", "addHospital");
  const { toggleShowModal } = useActions("modal", "toggleShowModal");
  const hospitalTypes = useSignal<Array<HospitalType>>("hospitalTypes");

  const { showSnackBar } = useContext<SnackbarContextType>(SnackbarContext);

  const [image, setImage] = useState<string | null>(null)
  const [filename, setFileName] = useState("No image selected")

  const [values, setValues] = useState<FormValueType>(initialFormValues)
  const [errors, setErrors] = useState<FormValueErrorType>(initialFormErrors)

  useEffect(() => {

    setValues({ ...values, type: hospitalTypes[0].id });

    return () => {
      console.log("Un mounted");
    }
  }, [])

  /**
   * Form validation
   * @returns 
   */
  const FormValidation = () : boolean => {
    // For hospital name
    if(!values.hospitalName){
      setErrors({ ...errors, hospitalName: true });
      return false;
    }
    // For city
    if(!values.ville){
      setErrors({ ...errors, ville: true });
      return false;
    }
    // For street
    if(!values.quartier){
      setErrors({ ...errors, quartier: true });
      return false;
    }
    // For phone number
    if(!values.telephone){
      setErrors({ ...errors, telephone: true });
      return false;
    }
    // For price
    if(!values.prix){
      setErrors({...errors, prix:true})
      return false;
    }
    // For longitute
    if(!values.longitude){
      setErrors({...errors, longitude:true})
      return false;
    }
    // For latitude
    if(!values.latitude){
      setErrors({...errors, latitude:true})
      return false;
    }
    // For image
    if(!values.image){
      setErrors({...errors, image:true})
      return false;
    }

    return true;
  }

  const addNewHospital = async () => {

    const formData = new FormData();
    formData.append('name', values.hospitalName.toLocaleLowerCase().trim());
    formData.append('latitude', parseFloat(values.latitude.toLocaleLowerCase().trim()).toString());
    formData.append('longitude', parseFloat(values.longitude.toLocaleLowerCase().trim()).toString());
    formData.append('cost', values.prix);
    formData.append('street', values.quartier.toLocaleLowerCase().trim());
    formData.append('city', values.ville.toLocaleLowerCase().trim());
    formData.append('hospitalTypeId', values.type.split('/')[0]);
    if(values.image) formData.append('image', values.image);

    const { data } = await createHospital(formData);

    const newHospitalAddress = new Address(
      data.latitude,
      data.longitude,
      data.street,
      data.city, 
      data.postalCode ?? "",
      "Cameroun"
    );

    const newHospital = new Hospital(
      data.id, 
      data.name,
      data.hospitalType.label,
      [data.photo],
      data.notice ?? 0,
      data.phone ?? "",
      data.cost,
      data.website ?? values.site.toLocaleLowerCase().trim() ?? "",
      newHospitalAddress
    );
    
    addHospital(newHospital);

    if(data) return true;
  }
    
  return (
    <Fade in={true} timeout={600}>
      <form className={styles.container}>
        <h3>Ajouter un Hopital</h3>
        <div className={styles.hospitalContainer}> 
          <div className={styles.formContentInformation}>
            <InputFieldWithLabel labelText="Nom de l'hopital" errorMessage="Veuillez entrer le nom de l'hopital" placeholder="nom de l'hopital"
              value={values.hospitalName} inputName="hospitalName" hasError={errors.hospitalName}
              onChangeFunction={(event) => setValues({...values , hospitalName:event.currentTarget.value })}
            />
            
            <InputFieldWithLabel labelText="Ville" errorMessage="Veuillez entrer la ville" placeholder="ville de localisation"
              value={values.ville} inputName="ville" hasError={errors.ville}
              onChangeFunction={(event) => setValues({...values , ville:event.currentTarget.value })}
            />

            <InputFieldWithLabel labelText="Quartier" placeholder="Quartier ou se situe l'hopital" value={values.quartier}
              inputName="quartier" hasError={errors.quartier} errorMessage="Veuillez entrer le quartier"
              onChangeFunction={(event) => setValues({...values , quartier:event.currentTarget.value })}
            />

            <div className={styles.form_inputs}>
              <label htmlFor="type" className={styles.form_labels}>
                Type
              </label>
                <select onChange={(event) => setValues({ ...values, type: event.currentTarget.value  })} className={styles.select_input} name="select Hospital">
                  {
                    hospitalTypes && hospitalTypes.map(type => (
                      <>
                        <option value={`${type.id}/${type.label}`}>{capitalizeFirstLetter(type.label)}</option>
                      </>
                    ))
                  }
                </select>
            </div>

            <InputFieldWithLabel labelText="Telephone" inputName="phone" placeholder="Numero de telephone" value={values.telephone} 
              hasError={errors.telephone} errorMessage="Veuillez entrer le numero de telephone"
              onChangeFunction={(event) => setValues({...values , telephone:event.currentTarget.value })}
            />

            <InputFieldWithLabel labelText="Prix du service" inputName="price" placeholder="Prix de traitement du paludisme"
              value={values.prix} hasError={errors.prix} errorMessage="Veuillez entrer le prix"
              onChangeFunction={(event) => setValues({...values , prix:event.currentTarget.value })}
            />

            <InputFieldWithLabel labelText="Longitude" inputName="longitude" placeholder="exemple: " value={values.longitude}
              hasError={errors.longitude} errorMessage="Veuillez entrer la longitude"
              onChangeFunction={(event) => setValues({...values , longitude:event.currentTarget.value })}
            />

            <InputFieldWithLabel labelText="Latitude" inputName="latitude" placeholder="exemple: " value={values.latitude}
              hasError={errors.latitude} errorMessage="Veuillez entrer la latitude"
              onChangeFunction={(event) => setValues({...values , latitude:event.currentTarget.value })}
            />

            <InputFieldWithLabel labelText="Boite Postale" inputName="BP" placeholder="exemple: " value={values.boitePostale}
              hasError={false} errorMessage=""
              onChangeFunction={(event) => setValues({...values , boitePostale:event.currentTarget.value })}
            />

            <InputFieldWithLabel labelText="Site web" inputName="site" placeholder="exemple: Lien du site de l'hopital"
              value={values.site} hasError={false} errorMessage=""
              onChangeFunction={(event) => setValues({...values , site:event.currentTarget.value })}
            />

          </div>  
          <div onClick={() => { inputDivRef.current?.click() }} className={styles.imageContent}>
            <input ref={inputDivRef} type="file" accept = "image/*" alt ={filename} hidden 
              onChange = {({target:{files}}) => {
                if(files) {
                  files[0] && setFileName(files[0].name)
                  setImage(URL.createObjectURL(files[0]))
                  setValues({...values, image: files[0]})
                }
              }}
            /> 

            {
              image ?
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <div style={{ width: '100%', height: '100%' }}>
                    <img src={image} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                      loading={'lazy'}
                    />
                  </div>
                  <div style={{ position: 'absolute', top: -15, right: -15, padding: '0px 10px 0px 10px', backgroundColor: 'red',
                    borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setImage(null);
                    setValues({ ...values, image: null });
                    setFileName("");
                  }}>
                    <span style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: 'white'
                    }}>
                      &#9747;
                    </span>
                  </div>
                </div>
                :
                <>
                  <MdCloudUpload size={60} color="#1475cf" />
                  <CustomErrorsComponent hasError={errors.image} errorDesc={"veuillez charger l'image"} />
                  <button onClick={(e) => { e.preventDefault(); }} className={styles.buttonUpload}> Browse file </button>
                </>
            }
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={(e) => {
            e.preventDefault();
            setValues(initialFormValues)
            setErrors(initialFormErrors)
          }} color='#A1A1A1' width={150} text = "Annuler" />
          <Button onClick={ async (e) => {
            e.preventDefault();
            setErrors(initialFormErrors);
            // Form validation process
            if (FormValidation()) {
              // setErrors(initialFormErrors);
              // setValues(initialFormValues);
              const res = await addNewHospital();

              if(res) {
                toggleShowModal(false)
                showSnackBar('Operation successful', false);
              }
            }
          }} width={150} text="Add Hopital" /> 
        </div>
      </form>
    </Fade>
  );
}