import React, { useState } from 'react'
import EmployeeHeader from './EmployeeHeader'

const ViewEmployee = () => {
  const [data, changeData] = useState([
    {
      name: "Rahul",
      avathar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10",
      empcode: "101",
      phno: 8756341298,
      designation: "HR"
    },
    {
      name: "Anjali",
      avathar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdocfNblhrKpFvdWYm15zCN_Uuk3mATJ1Fmm-pAgv8sQ&s=10",
      empcode: "102",
      phno: 9876543210,
      designation: "Manager"
    },
    {
      name: "Vishnu",
      avathar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10",
      empcode: "103",
      phno: 9123456789,
      designation: "Developer"
    },
    {
      name: "Meera",
      avathar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdocfNblhrKpFvdWYm15zCN_Uuk3mATJ1Fmm-pAgv8sQ&s=10",
      empcode: "104",
      phno: 9988776655,
      designation: "Tester"
    }
  ])

  return (
    <div>
        
      <div className="container mt-4">
        <EmployeeHeader />
        <div className="row g-3">

          {data.map((value, index) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4"
              >
                <div className="card h-100 shadow">
                  <img
                    src={value.avathar}
                    className="card-img-top"
                    alt={value.name}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>

                    <p className="card-text">
                      <strong>Employee Code:</strong> {value.empcode}
                    </p>

                    <p className="card-text">
                      <strong>Phone:</strong> {value.phno}
                    </p>

                    <p className="card-text">
                      <strong>Designation:</strong> {value.designation}
                    </p>

                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default ViewEmployee