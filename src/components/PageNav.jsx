import { Link, NavLink } from "react-router-dom";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:820346704.
import styles from './PageNav.module.css'

export default function PageNav({children}){
    return <nav className={styles.nav}>
        <div className={styles.logo}>EnchantMart</div>
        <ul className={styles.list}>
            <li>
                {children? children : ''}
                </li>
            <li>
                <NavLink to="/">home</NavLink>
            </li>
            <li>
                <NavLink to="/products"> Products</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
           
        </ul>
    </nav>
}