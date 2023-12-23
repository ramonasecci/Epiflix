import Image from 'react-bootstrap/Image';
import logo from '../logo.png'


const MyNavbar = () => {
    return (

        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#221f1f" }}
        >
            <a className="navbar-brand" href="www">
                <Image src={logo} className="imgLogo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Home <span className="sr-only"></span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold" href="www">
                            TV Shows
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Movies
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            Recently Added
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold" href="www">
                            My List
                        </a>
                    </li>
                </ul>
                <div className='d-flex me-3 align-items-center'>
                    <i className="fa fa-bell text-white mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                        </svg>
                    </i>
                    <div id="kids">KIDS</div>
                    <i className="fa fa-bell text-white mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </i>
                    <i className="fa fa-user text-white mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </i>
                </div>
            </div>
        </nav>
    )
}

export default MyNavbar