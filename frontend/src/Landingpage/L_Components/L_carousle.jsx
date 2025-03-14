import React from "react";
import "../Assets/css/L_navbar.css";
import a from "../Assets/image/a.jpg";
import d from "../Assets/image/d.jpg";
import f from "../Assets/image/f.jpg";

const L_carousle = () => {
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <div
        id="governmentCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#governmentCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#governmentCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#governmentCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={a} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Gujarat Fire Safety CoP</h5>
              <p>Ensuring fire safety for a secure and prosperous Gujarat.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={d} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Apply for Fire NOC Online</h5>
              <p>
                Simplify your fire safety compliance with our online portal.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={f} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Track Your Application Status</h5>
              <p>Easily track the status of your fire safety applications.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#governmentCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#governmentCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default L_carousle;
