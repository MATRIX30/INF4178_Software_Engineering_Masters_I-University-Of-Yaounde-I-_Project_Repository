import { useActions, useSignal } from "@dilane3/gx";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import User from "../../entities/User";
import styles from "./styles/layout.module.css";

import profile_image from '../../assets/images/profile.png'

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  const { searchHospital } = useActions("hospitals", "searchHospital")
  const currentUser = useSignal<User | null>("user");

  return (
    <Fragment>
      <header className={styles.header}>
        <Link to="/">
          <span className={styles.logoText}>QuickCare</span>
        </Link>

        <div className={styles.inputContainer}>
          <input onChange={(e) => searchHospital(e.target.value)} className={styles.input} placeholder="Rechercher un hopital" />
        </div>

        <Link to="/profile">
          <div className={styles.profile}>
            <img
              className={styles.profileImage}
              src={currentUser && currentUser.avatar != "" ? currentUser.avatar : profile_image}
              alt="profile"
            />
            <span>{currentUser && currentUser.name}</span>
          </div>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>
    </Fragment>
  );
}
