import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

export const DashBoardNavbar = () => {
    const {user,logout} = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm px-4 py-2
    mb-3 rounded">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <span className="navbar-brand fw-bold text-success">
                <i className="bi bi-building me-2 "></i> Masomo School 

            </span>
            <div className=' d-flex align-items-center'>
                <span className='text-muted me-3'>
                    <i className='bi bi-person-circle me-2'></i> 
                    <strong>{user?.name}</strong>
                    <small className='text-muted '>({user?.role})</small>

                </span>
        {/* logout */}
                 <button className='btn btn-sm btn-danger me-2 align-iems-center'  onClick={logout}>
                    <i className='bi bi-box-arrow-right me-1'></i> Logout
        </button>
            </div>

        </div>

    </nav>
  )
}
export default DashBoardNavbar
