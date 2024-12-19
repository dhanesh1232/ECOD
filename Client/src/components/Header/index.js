import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-transparent ">
        <div className="container-fluid position-relative">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img
              src="
              https://res.cloudinary.com/dhzw6k0vc/image/upload/v1734634632/ECO_secondary_ad6eku.png"
              alt="Logo"
              width="100"
              height="80"
              classNameName="d-inline-block align-text-top "
            />
          </a>
          <div
            class="collapse collapse-horizontal position-absolute top-0 start-0 sm:start-1 md:d-none"
            style={{ height: "80px", left: "5px" }}
            id="collapseWidthExample"
          >
            <div class="shadow-lg card card-body w-100 d-flex flex-row align-items-center">
              <ul class="navbar-nav d-flex flex-row flex-wrap justify-content-center container-lg gap-3">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <div>
                <button
                  class="btn btn-warning rounded-xxl bordered fs-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                >
                  <i className="bi bi-x"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="d-none md:d-flex md:collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
