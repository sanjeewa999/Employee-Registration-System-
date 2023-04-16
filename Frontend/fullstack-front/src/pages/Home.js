import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {

    const [users,SetUsers]=useState([]);

useEffect(() => {
  loadUsers();
},[]);

const loadUsers  = async()=>{
  const result = await axios.get("http://localhost:8080/users");
  SetUsers(result.data);
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
                <button className="btn btn-outline-primary mx-2">Edit</button>
                <button className="btn btn-danger mx-2">Delete</button>
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
