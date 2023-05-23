import "./LandingPage.css";
import images from "../Images/digital-health-care.png";

const LandingPage = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Healthcare Solutions <br /> for a Better Life
            </h1>
            <p className="lead">
              <span className="text-color">U Health</span>  provides practical solutions and resources to help individuals
              improve their health and well-being.
              <span className="text-color">U Health</span>offers information and guidance on how to make positive
              changes in various aspects of health.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                New User
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Previous User
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={images} alt="" width={720} />
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <span className="bi mt-4 mb-3" style={{ color: "var(--bs-indigo)" }}>
            <span className="fw-bold fs-5 text-color">
              <span className="fw-bold fs-2 text-color">U</span>
              Health
            </span>
          </span>
          <h1 className="text-body-emphasis">
            Healthcare the way you want it. Simple, convenient, and reliable.
          </h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            <span className="fw-bold fs-5 text-color">
              <span className="fw-bold fs-2 text-color">U</span>
              Health
            </span>
            provides practical solutions and resources to help individuals
            improve their health and well-being.
            <span className="fw-bold fs-5 text-color">
              <span className="fw-bold fs-2 text-color">U</span>
              Health
            </span>
            also offers information and guidance on how to make positive changes
            in various aspects of health.
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <button
              className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              type="button"
            >
              New User
              <svg className="bi ms-2" width={24} height={24}>
                <use xlinkHref="#arrow-right-short" />
              </svg>
            </button>
            <button
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
            >
              Previous User
            </button>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          />
          <svg className="bi mt-5 mb-3" width={48} height={48}>
            <use xlinkHref="#check2-circle" />
          </svg>
          <h1 className="text-body-emphasis">
            You Can Know Your Health Anywhere and Anytime
          </h1>
          <p className="col-lg-6 mx-auto mb-4">
            <span className="fw-bold fs-5 text-color">
              <span className="fw-bold fs-2 text-color">U</span>
              Health
            </span>
            is the world's only integrated virtual car system for delivering,
            enabling, and empowering whole-person health—from wellness and
            prevention to acute care to complex healthcare needs,
          </p>
          <button className="btn btn-primary px-5 mb-5" type="button">
            Learn More
          </button>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="/">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="/">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="/">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
