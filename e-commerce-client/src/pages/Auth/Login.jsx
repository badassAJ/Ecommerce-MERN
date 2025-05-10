import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Auth/Register.css";
import  toast from 'react-hot-toast';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {auth,setAuth} = useAuth();
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/login`,
        {  email, password,  }
      );
      if(res?.data?.success){
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token: res.data.token
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate(location.state || '/');
      }else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="register-container">
        <div className="register-form-box">
          <h2 className="register-title">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group mb-4">
              <label htmlFor="exampleInputEmail">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control large-input"
                id="exampleInputEmail"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control large-input"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
           
            <button type="button" className="btn btn-primary forgot-btn" onClick={()=>{navigate('/forgot-password')}}>
              Forgot Password
            </button>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
