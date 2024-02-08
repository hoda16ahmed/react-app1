import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
 <nav id="Nav" className="  navbar navbar-expand-lg fixed-top py-4 ">
  <div className="container">
    <NavLink className="navbar-brand  text-white text-uppercase fw-bolder fs-2" to="/home">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className={(x)=>x.isActive? 'team nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2':"nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"} aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item  me-3">
          <NavLink className={(x)=>x.isActive? 'team nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2':"nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"} to="/portifolio">Portifolio</NavLink>
        </li>
        <li className="nav-item  me-3">
          <NavLink className={(x)=>x.isActive? 'team nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2':"nav-link  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"} to="/contact">Contact </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
