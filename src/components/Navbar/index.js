import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import logoAllenty from './logoAllenty.jpg'
import NavbarLink from "../NavbarLink";



function Navbar(){
    return(
      <header className={styles.navbar} >
        <Link to="./">
            <img src={logoAllenty} alt="logomarca" />
        </Link>
        <nav>
           <NavbarLink url="./">Home</NavbarLink>
            <NavbarLink url="./About">About</NavbarLink>
         
        </nav>


      </header>

    )
}

export default Navbar;