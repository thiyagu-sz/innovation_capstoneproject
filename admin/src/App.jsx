import React, { useContext } from 'react'
import { ExpertContext } from './context/ExpertContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddExpert from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import Login from './pages/Login';
import ExpertiseAppointments from './pages/Doctor/ExpertiseAppointments';
import ExpertiseDashboard from './pages/Doctor/ExpertiseDashboard';
import ExpertiseProfile from './pages/Doctor/ExpertiseProfile';

const App = () => {

  const { dToken } = useContext(ExpertContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-doctor' element={<AddExpert />} />
          <Route path='/doctor-list' element={<DoctorsList />} />
          <Route path='/doctor-dashboard' element={<ExpertiseDashboard />} />
          <Route path='/doctor-appointments' element={<ExpertiseAppointments />} />
          <Route path='/doctor-profile' element={<ExpertiseProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App