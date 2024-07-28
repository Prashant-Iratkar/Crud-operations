import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Table = ({UpdatedUser}) => {

    const [data,setData] = useState([])

    useEffect(()=>{
        async function FetchData(){
            try {
                const fetchUser = await axios.get('http://localhost:3000/api/get')
            const response = fetchUser.data
            // console.log(response)
            setData(response)
            } catch (error) {
                
            }
        }
        FetchData()

    },[data])



  return (
    <>
      <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Employees</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons"></i> <span>Add New Employee</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                           
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.user?.map((elem,index)=>{
                                return(
                                    <tr>
                                    <td></td>
                                    <td>{elem.name}</td>
                                    <td>{elem.surname}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.phone}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={()=>UpdatedUser(elem._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Edit" >Edit</i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal">
                                            <i className="material-icons" data-bs-toggle="tooltip" title="delete" >Delete</i>
                                        </a>
                                        {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                    </td>
                                </tr> 
                                )
                            })}
                                    
                        </tbody>
                    </table>
                </div>
            </div >
    </>
  )
}

export default Table
