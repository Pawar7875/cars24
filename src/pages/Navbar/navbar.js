import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#db0f62" }}>
      <nav class="navbar navbar-expand-lg navbar-dark primary-color">
        <Link className="navbar-brand m-2" to="/home">
          CARs-30
        </Link>
        <button
          class="navbar-toggler m-1"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav">
          <ul class="navbar-nav mr-auto ml-2">
            <li class="nav-item active">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/SignUp"
              >
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>

            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div
                class="dropdown-menu dropdown-primary"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>

          <form class="form-inline ml-1 mt-2">
            <div class="md-form my-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
