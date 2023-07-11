import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function NavBar() {
    return (
        <div className={styles.header}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/" >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/todo" >
                                    TODO
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/shop" >
                                    SHOP
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/weather" >
                                    WEATHER APP
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/about" >
                                    ABOUT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}