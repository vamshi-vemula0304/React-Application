import styles from '../styles/navbar.module.css'

export default function NavBar() {
    return <div className={ styles.header }>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/todo">TODO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop">SHOP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='/weather'>WEATHER APP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}