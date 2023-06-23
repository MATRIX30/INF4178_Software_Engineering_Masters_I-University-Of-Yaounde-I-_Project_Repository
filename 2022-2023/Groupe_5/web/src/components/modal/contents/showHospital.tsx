import styles from '../styles/showHospital.module.css'
import {CiLocationOn} from "react-icons/ci";
// import { HospitalType } from '../../../entities/Hospital';
import { useSignal } from '@dilane3/gx';
import { HospitalState } from '../../../gx/signal/hospital';
import { capitalizeFirstLetter } from '../../../utils/Functions';
import { Fade } from '@mui/material';

export default function  ShowHospital() {

  const { selectedHospital: hospital } = useSignal<HospitalState>("hospitals");

  if(!hospital) return null;

  return (
    <Fade in={true} timeout={300}>
      <div className={styles.container}>
        <div className={styles.hospitalInfo}>
          <span className={styles.hospName}>{hospital.name}</span>
            <div className={styles.hosp_NameLocal}>
              <CiLocationOn size ={22} />
              <span> 
                {capitalizeFirstLetter(hospital.address?.street) + ", " + capitalizeFirstLetter(hospital.address?.city) + ", " + capitalizeFirstLetter(hospital.address?.country)}
              </span> 
            </div>
            <div className={styles.hosp_distance}>
              <div className={styles.latitude}>
                <span className={styles.latitudeName}>Latitude</span>
                <span>(51 28' 38" N)</span>
              </div>
              <div className={styles.longitude}>
                <span className={styles.latitudeName}>Longitude</span>
                <span>(51 28' 38" S)</span>
              </div>
            </div>
            <div className={styles.descAmount}>
              <div className={styles.amountContent}>
                <span style={{fontFamily: "PoppinsBold",fontSize:"20px" ,color: "#333" }}>Prix minimal</span>
                <span>{hospital.cost}FCFA</span>
              </div>
              {/* <button type='button' className={styles.buttonP}>{HospitalType[hospital.type]}</button> */}
            </div>
        </div>

        <div className={styles.hospitalImage}>
        <img src={`http://localhost:3333/hospitals/image/${hospital.images[0]}`} className ={styles.images} />
        </div>
      </div>
    </Fade>
  );
}