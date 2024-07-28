import React, { useState } from 'react'
import Table from '../Component/Table'
import AddUser from '../Component/AddUser'
import UpdatedUser from '../Component/UpdatedUser'
import DeleteUser from '../Component/DeleteUser'
import axios from 'axios'

const UserTable = () => {

    const[value,setValue] = useState({
        name:"",
        surname:"",
        email:"",
        phone:""
    })

    const[updateid,setUpdateid] = useState()

    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
       try {
        const updateUser = await axios.put(`http://localhost:3000/api/update${updateid}`)
        const response = updateUser.data
        console.log(response)
       } catch (error) {
        console.log(error)
       }
    }


    const UpdateUser = (id) =>{
       setUpdateid(id)
    }

  return (
    <div>
      <Table UpdatedUser={UpdateUser}/>
      <AddUser/>
      <UpdatedUser value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <DeleteUser/>
    </div>
  )
}

export default UserTable
