import React, { useState } from 'react'

export default function AddUser() {

    const [user,SetUser]=useState({
        name:"",
        username:"",
        email:""
    }) 

    const {name,username,email}=user

    const onInputChange=(e)=>{
        
        SetUser({...user,[e.target.name]:e.target.value})

    }

    const onSubmit=(e)=>{
        e.preventDefault();
    }

   return  <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the Name"
                        name="name"
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">
                        User Name
                    </label>
                    <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the User name"
                        name="username"
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        E-mail
                    </label>
                    <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the E-mail"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <button type="submit" className="btn btn-outline-primary">
                    Submit
                </button>

                <button type="submit" className="btn btn-outline-danger mx-3">
                    Cancel
                </button>
                </form>


            </div>

        </div>
    </div>
  
}
