import React from 'react'
import './Nav.css'
const Alumni = () => {
  return (
    <>
     <div className="alumni">
      <div className="alu">
        <h1 className='mt-48'>Our alumni work at world-class <br /> companies around the world including</h1>
        </div> 
        <div className='flex justify-center flex-wrap mt-10 m-auto'>
            <div className="alu-img"><img src={require("./images/google.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/Interswitch.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/Andela.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/Microsoft.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/Paystack.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/brewery.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/Wema.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/clan.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/edozzier.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/moneymie.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/Army.png")} alt="" /></div>
            <div className="alu-img"><img src={require("./images/aella.png")} alt="" /></div>
            </div> 
            
     </div>
    </>
  )
}

export default Alumni