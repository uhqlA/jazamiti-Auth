import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { db } from "../../Firebase"
import { serverTimestamp, setDoc, doc  } from 'firebase/firestore';
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from 'react-toastify';

function Register () {
  const [showPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { name, number, email, password, confirmpassword } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth()
      const userCredential = 
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      updateProfile(auth.currentUser, {
        displayName: name
      })
      const user = userCredential.user

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp
      ();

        //sends data to db (a promise)
        await setDoc(doc(db, "users", user.uid), formDataCopy);
        toast.success("Registration successfull")
        navigate("/jazamiti ")
    
    } catch (error) {
      toast.error("Please fill the details correctly to Register")
      
    }
  }
    return (
        <div className="register-form-container">
          <form onSubmit={onSubmit} 
          
          className="register-form">
            <div className="register-form-content">
              <h3 className="register-form-title">Register</h3>
            
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  className="form-control mt-1"
                  type="text"
                  id="name"
                  value={name}
                  onChange={onChange}
                  placeholder="e.g Jon Doe"
                />
              </div>


              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                 
                  className="form-control mt-1"
                  type="text"
                  id="number"
                  value={number}
                  onChange={onChange}
                  placeholder="e.g 254700 000 000"
                />
              </div>
              
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  
                  className="form-control mt-1"
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  
                  className="form-control mt-1"
                  type="password"
                  id="password"  
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                />

                  {/* {showPassword ? (
                  <AiFillEyeInvisible
                    className="icon"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-4 text-xl curser-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )} */}

              </div>
              <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input
    
                  className="form-control mt-1"
                  type={showPassword ? "text" : "password"}
                  id="confirmpassword"
                  value={confirmpassword}
                  onChange={onChange}
                  placeholder="Re-Enter Password"
                />
{/* 
                  {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-4 text-xl curser-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 top-4 text-xl curser-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )} */}

              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              {/* <p className="text-center mt-2">
                Forgot <a href="/forgotpassword">password?</a>
              </p> */}

              <p className="text-center mt-2">
                Have an Account? <a href="/">Login</a>
              </p>
            </div>
          </form>
        </div>
      )
    }

export default Register
