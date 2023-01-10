import styles from './Header.module.css'
import leonLogo from '../img/logo-origami.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={leonLogo} alt="logo-leon" />
        </header>
    );
}