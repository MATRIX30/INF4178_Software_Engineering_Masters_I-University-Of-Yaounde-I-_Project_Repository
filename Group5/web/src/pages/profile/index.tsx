import Layout from "../../components/layout";
import {HiOutlineUser} from "react-icons/hi"
import {AiOutlineLogout} from "react-icons/ai"
import { Avatar } from "@mui/material";
import styles from "./styles/profile.module.css";
import { useSignal } from "@dilane3/gx";
import User from "../../entities/User";

import profile_image from '../../assets/images/profile.png'


export default function Profile() {

  const currentUser = useSignal<User | null>("user")

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profileContent}>
          <Avatar
            alt="profile-image"
            src={currentUser && currentUser.avatar != "" ? currentUser.avatar : profile_image}
            sx={{ width: 100, height: 100 ,marginTop: 5}}
          />    
          <div className={styles.profileDesc}>
            <span className={styles.username}>{currentUser && currentUser.name}</span>
            <span className={styles.userRole}>Administrateur</span>
          </div>
        </div>
        <div className={styles.infoContent}>
          <HiOutlineUser/>
          <span>Mise à jour</span>
        </div>
        <div className={styles.connexion}>
          <AiOutlineLogout/>
          <span>Deconnexion</span>
        </div>

      </div>
    </Layout>
  );
}
