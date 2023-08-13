import React from 'react'
import './Nav.css'
const Tour = () => {
  return (
    <>
    <aside className="asi">
        <div className="tour">
            <div className="frame">
            <iframe width="396" height="230" 
            src="https://www.youtube.com/embed/HgC6bjMbqpw" 
            title="Campus Tour | SQI College of ICT, Ibadan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
            </iframe>
            </div>
        <div className="glanc">
          <h1>Take a Tour</h1>
          <h3>
          Our campus is a living centre for
           innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.
          </h3>
        </div>
        </div>
       <div className="aside-blue">
        <h3>
            IT’S TIME FOR YOU TO TAKE YOUR TECH CAREER TO THE NEXT LEVEL
        </h3>
        <h1>
        Ready to Get Started?
        </h1>
        <h4>
            We provide and lead others in quality education, service, industry,<br /> and character as well as discipline.
        </h4>
        <div className="join">Join Us Today</div>
       </div>
    </aside>
    </>
  )
}

export default Tour