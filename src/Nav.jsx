import React from 'react';
import './Nav.css'
const Nav = () => {
  return (
    <>
       <header>
        <nav className="right">
            <img src={require("./images/logo.jpg")} alt="" />
        </nav>
        <nav className="left">
            <ul>
              <div className="drop">
              <li>About</li>
              <div className="dropdown">
              <h4>Our Story</h4>
                <h4>Our Team</h4>
                <h4>Campus info</h4>
              </div>
              </div>
                <div className="drop">
                <li>Programmes</li>
                <div className="dropdown">
                <h4>National Innovation Diploma</h4>
                <h4>Professional Diploma Program</h4>
                <h4>Executive Professional Certificate<br />Program</h4>
              </div>
                </div>
                <div className="drop">
                <li>Admission</li>
                <div className="dropdown">
                <h4>Apply for a Programme</h4>
                <h4>Mode of Study</h4>
                <h4>Tuition</h4>
                <h4>Frequently Asked Questions</h4>
              </div>
                </div>
                <div className="drop">
                <li>E-portal</li>
                <div className="dropdown">
                <h4>Student</h4>
                <h4>Staff</h4>
              </div>
                </div>
                <li>Scholarship</li>
                <li>News</li>
            </ul>
        </nav>
       </header>
    </>
  )
}

export default Nav