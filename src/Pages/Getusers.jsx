import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Getusers = () => {
    let[state,setstate]=useState([]);
    let[thed,setthead]=useState([]);
    let navigate=useNavigate();
    function deletes(id){
        axios.delete("http://localhost:3000/users/"+id)
        .then(()=>
        navigate("/"))
    }
    useEffect(()=>{
       let url=axios.get("http://localhost:3000/users")
        .then(res=>{setthead(Object.keys(res.data[0]).slice(0,4))
            setstate(res.data);
        },[state])

    },[state])
    // console.log(state)
    // console.log(thed);
  return (
    <>
    <div style={{ height:"150vh", width:"100%"}}>
    <div style={{marginLeft:"500px"}}>
    <table border={1} style={{height:"600px", width:"60%",backgroundImage:"linear-gradient( 135deg, #F97794 10%, #623AA2 100%)"}} >
       <caption>
       <strong><h1>CRUD operations</h1></strong>
       <br />
        <button onBlur={()=>navigate("/add")} >Add+</button>
       </caption>
        <thead>
          <tr>
            {thed.map((x,ind)=><th key={ind} style={{height:"100px", width:"100px", color:"white", fontWeight:"bold" , fontSize:"1.5rem"}} >{x}</th>)}
            <th style={{height:"100px", width:"100px", color:"white", fontWeight:"bold" , fontSize:"1.5rem"}} >opertions</th>
          </tr>
        </thead>
        <tbody>
                {
                    state.map(x=>{
                        return(
                        
                        <tr key={x.id} style={{color:"white", fontWeight:"10px"}} >
                        <td  >{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.username}</td>
                        <td>{x.email}</td>
                        <td>
                           <Link to={`/edit/${x.id}`} > <button>Edit</button></Link>
                           <br />
                            <button onClick={()=>deletes(x.id)}>Delete</button>
                        </td>
                       </tr>
                        
                        )
                    })
                }
        </tbody>
    </table>
    </div>
    </div>
    </>
  )
}

export default Getusers