import React from 'react'
import './Nav.css'
const Glance = () => {
  const diplo = {
     color:"blue",
     cursor:"pointer"
  }
  return (
    <>
    <aside>
        <div className="aside">
        <div className="glance">
          <h1>SCICT AT A GLANCE</h1>
          <h3>
            SQI College of ICT offers both <span style={diplo}>National Diploma</span> and
            <span style={diplo}> Professional Certificate programmes.</span>
          </h3>
          <p>The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the 
            Professional certificate is the certificate you earn after taking a professional course here at SQI.</p>
            <p>You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of 
              having undergone professional training in the field for which the certificate is issued.</p>
              <div className="glance-learn">Learn More</div>
        </div>
        </div>
       
    </aside>
    </>
  )
}

export default Glance