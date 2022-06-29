import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ForgetPassword from './pages/user/ForgetPassword';
import ResetPassword from './pages/user/ResetPassword';
import Signin from './pages/user/Signin';
import Signup from './pages/user/SignUp';
import Navbar from './components/navbar';
import Home from './pages/Mainhome/Home';
import Buycar from './pages/Mainhome/Buycar';
import Sellcar from './pages/Mainhome/Sellcar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {<ToastContainer position='top-center' autoClose={1000} />}
      <Routes>

        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/buycar' element={<Buycar />}></Route>
        <Route path='/sellcar' element={<Sellcar />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
