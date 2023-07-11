import styles from '../styles/navbar.module.css'

export default function NavBar() {
    return <div className={ styles.header }>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/todo">TODO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/shop">SHOP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='http://localhost:3000/weather'>WEATHER APP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/about">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}