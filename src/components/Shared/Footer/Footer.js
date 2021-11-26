import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-5 mx-auto">
              <div className="right-footer-container">
                <h3>Hotline</h3>

                <div className="phone align-items-center justify-content-center mt-4">
                  <div>
                    <h5>+001610687014</h5>
                  </div>
                </div>
                <div className="map  align-items-center justify-content-center">
                  <div>
                    <p>
                      Dhaka Banni Ahmmed Tower,
                      <br /> Road: 17 Block: A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
