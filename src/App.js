import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from "./pages/user/ForgetPassword";
import ResetPassword from "./pages/user/ResetPassword";
import Signin from "./pages/user/Signin";
import Signup from "./pages/user/SignUp";
import Home from "./pages/Mainhome/Home";
import Buycar from "./pages/Mainhome/Buycar";
import Sellcar from "./pages/Mainhome/Sellcar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      {<ToastContainer position="top-center" autoClose={1000} />}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/buycar" element={<Buycar />}></Route>
        <Route path="/sellcar" element={<Sellcar />}></Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
