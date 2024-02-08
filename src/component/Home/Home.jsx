import React from 'react'
import "./home.css"
export default function Home() {
  return (
    <div>
      <div >
        <div  className="home min-vh-100 d-flex justify-content-center align-items-center text-white py-5">
        <div  className="text-center">
            <div>
              <div className="text-center pt-4" >
                <img src={require("../../assets/images/avataaars.svg")}  alt='imag' />
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div  className="line1 me-3"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line1 ms-3" ></div>
                </div>
              </div>
              </div>
                  <div >Graphic Artist - Web Designer - Illustrator</div>
          </div>
          </div>
                  
      </div>
    </div>
  
  )
}
