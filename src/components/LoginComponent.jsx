// import React, { Component, useState } from 'react'
import React, {useState} from 'react'
import { Link,useNavigation } from 'react-router-dom'


const LoginComponent =()=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState("")
  const navigation = useNavigation()

const handleSubmit=async (e)=>{
  e.preventDefault()
  setLoading("Logging in")
  setLoading("")
  try {
    const data = {email,password}
    const res=await axios()
    if(res.data.user){
      if (res.data.user.role==="admin"){
        navigation("/admin-dashboard")
        }else if(res.data.user.role==="teacher"){
          navigation("/teacher-dashboard")

        }else if(res.data.user.role==="parent"){
          navigation("/parent-dashboard")
      }else{
        Navigate('/')
      }
    }
    setError(res.data.message)
    } catch (error) {
      setLoading("")
      setError(error.message)
      }
    }
  



   return (
      <div className='container'>
        <h2 className='text-success'>Login</h2>
        <form onSubmit={handleSubmit} className='card shadow p-4 bg-light rounded'>
          <h1 className='text-success text-center'>Masomo School</h1>
          <h2 className='text-success text-center'>Login</h2>
        {error && <div className='alert alert-danger'>{error}</div>}
        {success && <div className='alert alert-success'>{success}</div>}
        {loading && <div className='alert alert-info'>{loading}</div>}
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' required />
            onChange={(e) => setEmail(e.target.value)}
  
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' id='password' required />
            onChange={(e) => setPassword(e.target.value)}
          </div>
          <div className='d-grid mb-3'>
          <button type='submit' className='btn btn-success'>Login</button>
          </div>
          <div className='text-center'>
           <Link to='/register'>Don't have an account? Register</Link>
          </div>
        </form>
      </div>
    );
  };
  
  export default LoginComponent;