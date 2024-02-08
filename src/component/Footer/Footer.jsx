import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div >
    <div  className="footer py-5 ">
        <div  className="card-group ">
            <div  className="card test">
                <div  className="card-body text-center ">
                    <h3>LOCATION</h3>
                    <p >2215 John Daniel Drive</p>
                    <p >Clark, MO 65243</p>
                </div>
            </div>
            <div  className="card test">
             <div  className="card-body text-center">
                <h3 >AROUND THE WEB</h3>
                <div  className="icons">
                    <i className="fa-brands fa-facebook mx-1 icon"></i>
                    <i  className="fa-brands fa-twitter mx-1 icon"></i>
                    <i  className="fa-brands fa-linkedin-in mx-1 icon"></i>
                    <i  className="fa-solid fa-globe mx-1 icon"></i>
                </div>
              </div>
            </div>
                        
                <div  className="card test">
                    <div  className="card-body text-center">
                        <h3 >ABOUT FREELANCER</h3>
                        <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                    </div>
                </div>
        </div>
    </div>
    <div  className="p text-center text-white ">
         <p>Copyright © Your Website 2021</p>
    </div>
 </div>
    </div>
  )
}
