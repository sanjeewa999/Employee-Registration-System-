import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams }from "react-router-dom";

export default function Home() {

    const [users,SetUsers]=useState([]);

    const {id}=useParams()

useEffect(() => {
  loadUsers();
},[]);

const loadUsers  = async()=>{
  const result = await axios.get("http://localhost:8080/users");
  SetUsers(result.data);
}

const deleteUser=async (id)=>{
  await axios.delete(`http://localhost:8080/user/${id}`)
  loadUsers()
}

  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">User ID</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index) =>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <button className="btn btn-primary mx-2">View</button>
                <Link 
                  className="btn btn-outline-primary mx-2"
                  to={`/edituser/${user.id}`
                  }>Edit
                </Link>

                <button 
                  className="btn btn-danger mx-2"
                  onClick={()=>deleteUser(user.id)}
                >
                  Delete
                </button>
            </td>
            </tr>
        ))
    }
  </tbody>
</table>

        </div>
    </div>
  )
}
