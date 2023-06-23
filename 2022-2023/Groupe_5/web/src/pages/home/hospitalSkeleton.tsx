import styles from './styles/hospitalSkeleton.module.css'

const HospitalSkeleton = () => {
    return (
      <div className={styles.hospital_skeleton}>
        <div className={styles.hospital_skeleton_image}>
          <div className={styles.hospital_skeleton_type_tag} />
        </div>
        <div className={styles.hospital_skeleton_body}>
          <div className={styles.hospital_skeleton_title} />
          <div className={styles.hospital_skeleton_address} />
          <div className={styles.hospital_skeleton_coords} >
            <div/>
            <div/>
          </div>
        </div>
      </div>
    );
}

export default HospitalSkeleton;