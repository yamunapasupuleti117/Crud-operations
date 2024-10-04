import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Updateusers = () => {
    let[api,setapi]=useState({ id:"", username:"",name:"",email:" "});
    let navigate=useNavigate();
    let change=(e)=>{
        setapi({...api, [e.target.name]:e.target.value })
    }
    let{id}=useParams();
    useEffect((e)=>{
        axios.get("http://localhost:3000/users/"+id)
        .then((x)=>setapi(x.data))
    },[])
    // console.log(api);
    function Updates(e){
        e.preventDefault()
       axios.put("http://localhost:3000/users/"+id,api)
       .then(()=>{
        navigate("/")
       })
    }
   
  return (
    <div>
        <h1>Edit user</h1>
        <form action="">
            <input type="text" placeholder='id' name='id' value={api.id} onChange={change} />
            <br />
            <input type="text" placeholder='name' name='name' value={api.name} onChange={change} />
            <br />
            <input type="text" placeholder='username' name='username' value={api.username} onChange={change} />
            <br />
            <input type="email" placeholder='email' name='email' value={api.email} onChange={change} />
            <br />
            <button onClick={Updates} >Update user</button>
        </form>
    </div>
  )
}

export default Updateusers;