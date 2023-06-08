import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [mail,setMail] = useState();
    const [pass,setPass]=useState();
    const [userData,setUserData]=useState();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        axios.post("http://localhost:4000/login",{
            email:mail,
            password:pass
        })
        .then((response)=>{
            if(response.data==="invalid password" || response.data==="email id doesn't exists"){
                document.getElementById("warningMessage").innerHTML = response.data;
                
            }
            else{
                setUserData(response.data);
            }
            // setUserData(response.data);
            // console.log(response.data);
        })
        .catch((err)=>console.log(err));
    }
    if(userData){
        if(typeof(userData)=="object"){
        localStorage.setItem("user",JSON.stringify(userData));
        navigate('/');
        }
        console.log(userData);
        console.log(typeof(userData));
    }
    useEffect(()=>{

        const auth = localStorage.getItem('user');
    
        if(auth){
          navigate("/");
        }
      },[])
  return (
    <div className='signup-container'>
    <h1>Login</h1>
    <p id="warningMessage"></p>
    <input type='text' placeholder='Enter email' className='input-box' onChange={(e)=>setMail(e.target.value)}/>
    <input type="password" placeholder='Enter password' className='input-box' onChange={(e)=>setPass(e.target.value)}/>
    <button type='button' className='signup-button' onClick={handleLogin}>Login Up</button>
  </div>
  );
}

export default Login;
