import React from 'react'
import './Nav.css'
const News = () => {
  return (
    <>
    <div className="news">
        <div className="late">
            <h1>Latest News</h1>
            <div className="lat">Read More</div>
        </div>
        <div className="lat-flex">
            <div className="long">
                <div className="flex-img">
                    <img src={require("./images/sqijamb.jpg")} alt="" />
                </div>
                <div className="hmm">
                <h1>SQI College of ICT Post-UTME <br /> Examination Date, 
                    and Change of <br /> Institution 2023</h1>
                    <small>Jul 10, 2023</small>
                    <p>
                     SQI College of ICT Post-UTME Examination Date, and Change of
                     Institution We would like to inform you that the SQI Post-UTME Examination has been 
                     slated for July 29, 2023.  This examination is a crucial step towards gaining admission into 
                     SQI College of ICT for the...
                    </p>
                </div>
                
            </div>
            <div className="short">
            <div className="flex-img">
                    <img src={require("./images/Scholarship.jpg")} alt="" />
                </div>
                <div className="hmm">
                <h1>13TH SQI ICT Scholarship 2023</h1>
                    <small>Jun 16, 2023</small>
                    <p>
                    As technology continues to dominate various industries, the demand for professionals 
                    from diverse backgrounds who have upgraded their skills to meet market demands is on the rise.
                     I hereby announce the launch of 2023 Scholarship. This year scholarship has been tagged:...
                   </p>
                </div>
                
            </div>
            <div className="short">
            <div className="flex-img">
                    <img src={require("./images/comSci.jpg")} alt="" />
                </div>
                <div className="hmm">
                <h1>Computer science in a nutshell</h1>
                    <small>Jun 14, 2023</small>
                    <p>
                    Computer science is the study of how to use computers to solve problems. It is a vast and ever-evolving field,  slated for July 29, 2023
                    with new discoveries being made all the time. Computer scientists are the people who design, build, and maintain the computers that we use every day. They...
                   </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default News