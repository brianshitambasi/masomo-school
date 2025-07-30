import React, {Link, useState } from 'react'

const RegisterComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secretKey, setSecretKey] = useState('')
    return(
        <div className='container mt-5' style={{maxWidth: '500px'}}>
            <form action="" className='card shadow p-4 bg-light rounded'>
                <h1 className='text-center text-success'>Masomo School</h1>
                <h2 className='text-centre mb-4 text-success'>Register</h2>

                {/*Inputs*/}
                <input type="text" className="form-control mb-3" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)} /> {name} {/* e stands for event */}

                <input type="email" className="form-control mb-3" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /> {email} 

                <input type="password" className="form-control mb-3" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />{password}

                <input type="password" className="form-control mb-3" placeholder='Secret Key' value={secretKey} onChange={(e)=>setSecretKey(e.target.value)} />{secretKey}

                <div className='d-grid mb-3'>
                    <button type='submit' className='btn btn-success'>Register</button>
                </div>

                <div className='text-center'>
                    <p>Already have an account? {''}</p>
                    <Link to="/login" className='text-decoration-none'>Login</Link>
                </div>

            </form>
        </div>
    )

}

export default RegisterComponent