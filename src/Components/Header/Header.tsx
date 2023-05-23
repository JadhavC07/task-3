import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-primary sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-color fw-bold  text-decoration-none"
            >
              <span
                className="bi me-2 fw-bold fs-2 text-color"
                aria-label="Bootstrap"
              >
                U
              </span>
              Health
            </NavLink>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/home" className="nav-link px-2 text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/user" className="nav-link px-2 text-white">
                  Users
                </NavLink>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-light"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-outline-light">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
