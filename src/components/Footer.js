import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const logo = new URL("../images/school.png", import.meta.url);
  return (
    <>
      <div className="footer">
        <Row>
          <Col lg={3}>
            <img
              src={logo} alt="logo"
              style={{
                width: "300px",
                height: "130px",
                padding: "10px",
                margin: "15px",
                borderRadius: "10px",
              }}
            ></img>
          </Col>
          <Col lg={3}>
            <h3 className="footer-heading">DIS LINKS</h3>
            <ul className="arrow-list">
              <a href="#about" className="footer-list">
                <li>About us</li>
              </a>
              <a href="#about" className="footer-list">
                <li>Acadmics</li>
              </a>
              <a href="/facilities" className="footer-list">
                <li>Facilities</li>
              </a>
              <a href="/contact" className="footer-list">
                <li>Contact</li>
              </a>
              <a href="/activites" className="footer-list">
                <li>Activities</li>
              </a>
              <a href="/contact" className="footer-list">
                <li>Contact</li>
              </a>
            </ul>
          </Col>
          <Col lg={5}>
            <h3 className="footer-heading">HEAD OFFICE</h3>
            <div style={{color:"white"}}>
              <div className="mb-3  d-flex">
                <IoLocationOutline style={{marginRight:"15px",fontSize:"25px"}}/>C 310-311, Unitech Business Zone, Nirvana
                Country South City 2, Sector 50 Gurugram, Pin 122018.
              </div>
              <div className="mb-3">
                <span>
                  <IoCall style={{marginRight:"15px"}}/>
                  1800 891 1256
                </span>
              </div>
              <div className="mb-3">
                <MdEmail style={{marginRight:"15px"}} />
                enquiry@dreamindia.com
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
