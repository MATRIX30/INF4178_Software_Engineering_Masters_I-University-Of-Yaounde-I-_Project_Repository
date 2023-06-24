import styles from "./styles/auth.module.css";
import image from "../../assets/images/login.png";
import Button from "../../components/buttons";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useContext, useState } from "react";
import { Colors } from "../../utils/Colors";
import { login } from "../../api/auth";
import { SnackbarContext, SnackbarContextType } from "../../globalContext/snackbarContext";
import { useNavigate } from "react-router-dom";
import { useActions } from "@dilane3/gx";
import User from "../../entities/User";

type FormState = {
  email: string,
  password: string
}

export default function SignIn() {
  // Local state
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {loadUser} = useActions("user", "loadUser");

  const { showSnackBar } = useContext<SnackbarContextType>(SnackbarContext);

  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: ''
  })

  // Local functions
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { data, user } = await login(formState.email.toLowerCase().trim(), formState.password.trim());
  
    if(data) {
      if(user) {
        const currentUser = new User(user.id, user.name, user.avatar ?? "", user.email);

        const tempUser = {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          avatar: currentUser.avatar,
        }

        loadUser(currentUser);
        localStorage.setItem('user', JSON.stringify(tempUser));
      }
      showSnackBar('Connexion Successful', true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      showSnackBar('Connexion Unsuccessful',);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <div className={styles.form}>
          <h2 className={styles.title}>Sign In</h2>
          <p>Welcome back, login to your account.</p>

          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              value={formState.email}
              className={styles.input}
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              value={formState.password}
              className={styles.input}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />

            <div className={styles.passwordIcon} onClick={togglePassword}>
              {!showPassword ? (
                <FiEyeOff size={24} color={Colors.gray} />
              ) : (
                <FiEye size={24} color={Colors.gray} />
              )}
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <Button width={"100%"} text="Connection" onClick={handleSubmit} />
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={image} alt="Login image" />
        </div>
      </form>

      <div className={styles.background} />
    </div>
  );
}
