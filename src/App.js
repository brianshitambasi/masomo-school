import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import NotAuthorized from './components/NotAuthorized';
import NotFound from './components/NotFound';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import { AuthProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/context/ProtectedRoutes';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import Student from './components/admin/Student';
import Classes from './components/admin/Classes';
import Parents from './components/admin/Parents';
import Teachers from './components/admin/Teachers';



function App() {
  return (
    <Router>
    {/* we wrap all routes inside the authprovider */}
    <AuthProvider>

      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        
        {/* Admin Protected Routes */}
        <Route  path='/admin-dashboard'
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout/>
          </ProtectedRoute>
        }>
          <Route  path='' element={<AdminDashboard/>}/>
          <Route  path='students' element={<Student/>}/>
          <Route  path='teachers' element={<Teachers/>}/>
          <Route  path='classes' element={<Classes/>}/>
          <Route  path='parents' element={<Parents/>}/>

        </Route>

        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/register' element={<RegisterComponent/>}/>

        {/* default routes */}
        <Route path='/not-authorized' element={<NotAuthorized/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AuthProvider>
   </Router>
  );
}

export default App;
