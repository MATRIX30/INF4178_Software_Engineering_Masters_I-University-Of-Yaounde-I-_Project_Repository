import styles from "./styles/hospital.module.css";
import {CiLocationOn} from "react-icons/ci";
import HospitalEntity from "../../entities/Hospital";
import { capitalizeFirstLetter } from "../../utils/Functions";
import imagePlaceHolder from '../../assets/images/placeholder_image.jpg';


type HospitalProps = {
    hospital: HospitalEntity,
    onShow: () => void
}

export const HospitalComponent = ({hospital, onShow}: HospitalProps) => {
  return (
    <div className={styles.hospitalContainer} onClick={onShow}>
      <div className={styles.hosp_ImageBox}>
        <img src={hospital.images[0].length > 0 ? `http://localhost:3333/hospitals/image/${hospital.images[0]}` : imagePlaceHolder} alt ="" className={styles.images} loading={"lazy"} />
        <button className={styles.button}> {hospital.type} </button>
      </div>
      <div className={styles.hosp_Description}>
        <div className={styles.hospName}> {hospital.name} </div>
        <div className={styles.hosp_NameLocal}>
          <CiLocationOn size ={22} />
          <span> 
            {capitalizeFirstLetter(hospital.address?.street) + ", " + capitalizeFirstLetter(hospital.address?.city) + ", " + capitalizeFirstLetter(hospital.address?.country)}
          </span> 
        </div>
        <div className={styles.hosp_distance}>
          <span> Latitude (51 28' 38" N)</span>
          <span> Longitude (51 28' 38" S)</span>
        </div>
      </div>
    </div>
  )
}
