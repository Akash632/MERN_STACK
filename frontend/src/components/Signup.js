import React, { useEffect,useState } from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';
function Signup() {
    const [name,setName]=useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const [result,setResult] = useState();
    const navigate = useNavigate();

    const collectData=()=>{
        axios.post("http://localhost:4000/signup",{
          name:name,
          email:email,
          password:password
        })
        .then((response)=>{
          if(response.data==="user already exists"){
            document.getElementById("warningMessage").innerHTML=response.data;
          }
          else{
            setResult(response.data);
          }
        })
        .catch((err)=>console.log(err));
    }
    if(result){
      navigate("/");
      localStorage.setItem("user", JSON.stringify(result));
    }

    useEffect(()=>{

    const auth = localStorage.getItem('user');

    if(auth){
      navigate("/");
    }
  },[])
  
  return (
    <div className='signup-container'>
      <h1>Signup</h1>
      <p id="warningMessage"></p>
      <input type='text' placeholder='Enter name' className='input-box'
      onChange={(e)=>setName(e.target.value)}
      value={name}
      />
      <input type='text' placeholder='Enter email' className='input-box'onChange={(e)=>setEmail(e.target.value)}
      value={email}/>
      <input type="password" placeholder='Enter password' className='input-box'onChange={(e)=>setPassword(e.target.value)}
      value={password}/>
      <button type='button' className='signup-button' onClick={collectData}> SignUp</button>
    </div>
  );
}

export default Signup;
