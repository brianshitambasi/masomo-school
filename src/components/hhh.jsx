import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading,setLoading] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading('Logging in...');
    setError('');
    setSuccess('');

    // Create an object with the form data
    try {
      const data = { email, password };
      // Simulate an API call or form submission
      const res = await axios.post('https://schoolproject-m14c.onrender.com/api/user/Auth/login', data);
      if(res.data.user){
        if(res.datauser.role==='admin'){
          navigate('/admin-dashboard');
        }else if(res.data.user.role==='teacher'){
          navigate('/teacher-dashboard');
        }else if(res.data.user.role==='parent'){
          navigate('/parent-dashboard');
          
        }else{
          navigate('/');
        }
        setSuccess(res.data.message);
        setLoading('');
        alert("Login successful! You can now access the dashboard.");
        navigate('/dashboard');
      }
      setLoading(res.data.message);
      alert();
      navigate('/dashboard');
    } catch (error) {
        setError(error.response.data.message);
        setLoading('');
    }
  };

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