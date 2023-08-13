import React from 'react'
import './Nav.css'
const Model = () => {
  return (
    <>
    <section className="global">
        <div className="global-left">
            <h1>Study to <br /> become a <br /> global talent</h1>
            <p>Learn new tech skills using world-class curriculum and top industry experts.</p>
           <div className="glob"><button>Start Now</button></div> 
        </div>
        <div className="global-right">
            <img src={require("./images/sqimodel.png")} alt="" />
        </div>
    </section>
    </>
  )
}

export default Model