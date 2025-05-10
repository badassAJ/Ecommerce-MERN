import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import "../Auth/Register.css";
import  toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [question, setQuestion] = useState("");
  
  
  const navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/forgot-password`,
        {  email, newPassword,question  }
      );
      if(res?.data?.success){
        toast.success(res.data.message);
        navigate('/login');
      }else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
}
  return (
    <Layout title={'Forgot Password - Ecommerce APP'}>
      <div className="register-container">
        <div className="register-form-box">
          <h2 className="register-title">RESET PASSWORD</h2>
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
              <label htmlFor="exampleInputPassword1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control large-input"
                id="exampleInputPassword1"
                placeholder="Enter New Password"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputQuestion">Answer</label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="form-control large-input"
                id="exampleInputQuestion"
                placeholder="Enter your birthplace?"
                required
              />
            </div>
           
            
            
            <button type="submit" className="btn btn-primary submit-btn">
              Reset
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ForgotPassword
