import React, {useEffect, useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({setLoginUser})=>{
    const history = useHistory()
    useEffect(()=>{
        if(localStorage.getItem("data")){
            history.push("/home")
        }
    },[])
    const [ user,setUser] = useState({
        email:"",
        password:"",
    })
    const handleChange = e =>{
        const {name,value}=e.target
        console.log(name,value)
        setUser({
            ...user,
            [name]:value 
            
        })
    }

    const login=()=>{
        const body={
            email:user.email,
            password:user.password
        }
        axios.post("http://localhost:9002/login",body)
        .then(res => {
            alert(res.data.message)
            localStorage.setItem("data",res.data.user._id)
            history.push("/home")
        })
    }
    return(
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=> history.push("/register")}>Register</div>
        </div>
    )
}

export default Login