// import styles from './styles/snackbar.module.css';
import styles from './styles/snackbar.module.css';

type Props = {
    success: boolean,
    snackText: string,
}

const SnackBar = ({success, snackText}: Props) => {

    return (
        <div
            className={`${styles.snackbar} ${success ? styles.show : ''}`}
        >
            <span style={{
                color: success ? 'green' : 'red',
            }}>
                {snackText}
            </span>
        </div>
    )
}

export default SnackBar;