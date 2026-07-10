import React from 'react'
import EmployeeHeader from './EmployeeHeader'

function DeleteEmployee() {
  return (
    <div>
        <h1><center>Delete Employee</center></h1>
        <EmployeeHeader />
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-2 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Emp Code</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    </div>
  )
}

export default DeleteEmployee