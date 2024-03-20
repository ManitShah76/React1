import React from "react";
import "./Footer.css";
import logo from '../Images/logo.png'

function Footer() {
  return (
    <div>
      <footer className="footer-10">
        <div className="container">
            <img src={logo} alt="" width="300px"/>
          <div className="row mb-1 pb-3 mt-3">
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-1 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <span>(+91) 1234 567891</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-2 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text">
                    <span>saytees27@email.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-3 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <span>
                      Kheda
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 mb-md-0 mb-4">
                  <h2 className="footer-heading">Shop</h2>
                  {/* <ul className="list-unstyled">
                    <li>
                      <a href="#" className="d-block">
                        Out story
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Awards
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Career
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="col-md-3 mb-md-0 mb-4">
                  <h2 className="footer-heading">Category</h2>
                  {/* <ul className="list-unstyled">
                    <li>
                      <a href="#" className="d-block">
                        Our services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Clients
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Press
                      </a>
                    </li>
                  </ul> */}
                </div>
                {/* <div className="col-md-2 mb-md-0 mb-4">
                  <h2 className="footer-heading">Offices</h2>
                  {/* <ul className="list-unstyled">
                    <li>
                      <a href="#" className="d-block">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Privacy Policy
                      </a>
                    </li>
                  </ul> 
                </div> */}
                <div className="col-md-3 mb-md-0 mb-4">
                  <h2 className="footer-heading">Abouts</h2>
                  {/* <ul className="list-unstyled">
                    <li>
                      <a href="#" className="d-block">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Privacy Policy
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="col-md-3 mb-md-0 mb-4">
                  <h2 className="footer-heading">Contects</h2>
                  {/* <ul className="list-unstyled">
                    <li>
                      <a href="#" className="d-block">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block">
                        Privacy Policy
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            
          </div>
            <div className="col-md-12 col-md-12 mb-md-0 mb-4 ftco-footer-social">
              <a href="#" data-toggle="tooltip" data-placement="top" title="whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>


          <div className="row mt-5 pt-4 border-top">
            <div className="col-md-12 col-lg-12 mb-md-0 mb-4">
              <p className="copyright mb-0">@copyright 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
