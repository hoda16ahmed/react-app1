import React from 'react'
import "./portifoli.css"

export default function Portifolio() {
  return (
<div>
<div  class="mb-4 py-5 min-vh-100">
<div  class="pt-5">
    <div >
        <div  class="text-center pt-5" >
            <h2  class="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
            <div  class="d-flex align-items-center justify-content-center mb-3">
            <div  class="line me-3" ></div>
            <i  class="fa-solid fa-star"></i>
            <div  class="line ms-3" ></div>
            </div>
        </div>
    </div>
<div  class="container">
<div  class="row g-5">
    <div  class="col-lg-4 col-md-6">
        <div  class="rounded-3 overflow-hidden position-relative">
            <img  class="w-100 rounded-3" src={require("../../assets/images/poert1.png")}  alt='imag' />
                <div  class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i  class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
        </div>
     </div>
    <div  class="col-lg-4 col-md-6">
        <div  class="rounded-3 overflow-hidden position-relative">
            <img  class="w-100 rounded-3" src={require("../../assets/images/port2.png")}  alt='imag' />
                <div  class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i  class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
        </div>
     </div>
    <div  class="col-lg-4 col-md-6">
        <div  class="rounded-3 overflow-hidden position-relative">
            <img  class="w-100 rounded-3" src={require("../../assets/images/port3.png")}  alt='imag' />
                <div  class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i  class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
        </div>
     </div>
    <div  class="col-lg-4 col-md-6">
        <div  class="rounded-3 overflow-hidden position-relative">
            <img  class="w-100 rounded-3" src={require("../../assets/images/poert1.png")}  alt='imag' />
                <div  class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i  class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
        </div>
     </div>
    <div  class="col-lg-4 col-md-6">
        <div  class="rounded-3 overflow-hidden position-relative">
            <img  class="w-100 rounded-3" src={require("../../assets/images/port2.png")}  alt='imag' />
                <div  class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i  class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
        </div>
     </div>
    <div  class="col-lg-4 col-md-6">
        <div  class="rounded-3 overflow-hidden position-relative">
            <img  class="w-100 rounded-3" src={require("../../assets/images/port3.png")}  alt='imag' />
                <div  class="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i  class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
        </div>
     </div>
</div>
</div>
</div>
</div>
</div>
  )
}
