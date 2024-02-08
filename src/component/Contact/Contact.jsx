import React from 'react'
import "./contact.css"
export default function Contact() {
  return (
    <div>

      <div  className="mb-4 py-5 min-vh-100">
    <div  className="pt-3 conatiner pt-5">
        <div  title="conatct section " >
            <div  className="text-center pt-4 ">
                <h2  className="text-uppercase mb-3 fs-1 fw-bolder">conatct section</h2>
                <div  className="d-flex align-items-center justify-content-center mb-3">
                    <div  className="line me-3" ></div>
                    <i  className="fa-solid fa-star"></i>
                    <div  className="line ms-3"></div>
                </div>
            </div>
        </div>
                    <form  className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched form-check">
                        <input  id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 mb-4 position-relative ng-pristine ng-valid ng-touched" />
                        <input  id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 mb-4 position-relative ng-pristine ng-valid ng-touched"/>
                        <input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3  mb-4 position-relative ng-pristine ng-valid ng-touched" />
                        <input  id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 mb-4 position-relative ng-pristine ng-valid ng-touched" />
                        <button  className="btn mt-4 text-white bg-success"> send Message </button>
                    </form>
    </div>
</div>
    </div>
  )
}
