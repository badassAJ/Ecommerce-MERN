import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Auth/Register.css";
import  toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/register`,
        { name, email, password, phone, address, question }
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
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="register-container">
        <div className="register-form-box">
          <h2 className="register-title">REGISTER FORM</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputName">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control large-input"
                id="exampleInputName"
                placeholder="Enter full name"
                required
              />
            </div>
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
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPhone">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control large-input"
                id="exampleInputPhone"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputAddress">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control large-input"
                id="exampleInputAddress"
                placeholder="Enter address"
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
                placeholder="What is your birthplace?"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
