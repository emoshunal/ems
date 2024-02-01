import './App.css'
import AuthLoginComponent from './components/auth/AuthLoginComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/employee/EmployeeComponent'
import EmployeeListComponent from './components/employee/EmployeeListComponent'
import AuthCreateComponent from './components/auth/AuthCreateComponent'
import LandingPage from './components/_landingpage/LandingPage'



function App() {
  return (
    <>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<AuthLoginComponent />}></Route>
            <Route path="/account/create" element={<AuthCreateComponent />}></Route>
            <Route path="/employees" element={<EmployeeComponent />}></Route>
            <Route path="/employee-list" element={<EmployeeListComponent />}></Route>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
