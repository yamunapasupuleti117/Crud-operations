import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Add.css"

const Adduser = () => {
    let[api,setapi]=useState({ id:"", username:"",name:"",email:" "});
    let navigate=useNavigate();
    let change=(e)=>{
        setapi({...api, [e.target.name]:e.target.value })
    }
    function add(e) {
        e.preventDefault()
        axios.post("http://localhost:3000/users",api).then(()=>
        navigate("/")
        )
        
    }
  return (
    <>
    <div className="container" style={{backgroundImage:" linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)",height:"100vh",width:"100%"}} >
        <div className="form-container" style={{position:"relative", left:"50px", top:"50px", alignItems:"center", height:"500px",width:"500px" }} >
        <h1>Add a new user</h1>
        <form action="">
            <input type="text" placeholder='id' name='id' value={api.id}  onChange={change} />
            <br />
            <br />
            <input type="text" placeholder='name' name='name' value={api.name} onChange={change} />
            <br />
            <br />
            <input type="text" placeholder='username' name='username' value={api.username} onChange={change} />
            <br />
            <br />
            <input type="email" placeholder='email' name='email' value={api.email} onChange={change} />
            <br />
            <br />
            <button onClick={add}>Add user</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Adduser

