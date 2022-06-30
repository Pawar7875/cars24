import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div >
      <nav
        style={{ backgroundColor: "#db0f62" }}
        className="navbar navbar-expand-lg navbar-dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand " to="/home">
            CARs-30
          </Link>

          {/* <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button> */}

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarOptions">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signin"
                >
                  Signin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
