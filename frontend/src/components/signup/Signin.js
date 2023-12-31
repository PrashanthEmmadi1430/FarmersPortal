import React, { useState } from 'react'
import './Signup.css'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaTwitter,FaGoogle,FaFacebook } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from 'axios';

function Signin() {
const navigate=useNavigate()
	const [gmail,setGmail]=useState("")
	const [password,setPassword]=useState("")
	const response={};
	const loginsubmit=async()=>{
		 response= await axios.get('/api/user/login',{gmail,password})

	}
	if(response.statuscode===200)
	 navigate.to('/products');
  return (
    <div>
      <div className="container infinity-container">
		    <div className="row">
			    <div className="col-md-1 infinity-left-space"></div>
			
			    {/* <!-- FORM BEGIN --> */}
			    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
				    {/* <!-- Company Logo --> */}
				    <div className="text-center mb-3 mt-5">
				    </div>
				    <div className="text-center mb-4">
					    <h4>Login into account</h4>
				    </div>
				    {/* <!-- Form --> */}
				  <form className="px-3">
					  {/* <!-- Input Box --> */}
					  <div className="form-input">
						  <span><FaEnvelope/></span>
						  <input type="email" name="" value={gmail} onChange={(e)=>setGmail(e.target.value)}
						  placeholder="Email Address" tabIndex="10"required/>
					  </div>
					  <div className="form-input">
						  <span><FaLock /></span>
						  <input type="password" name="" value={password} onChange={(e)=>setPassword(e.target.value)}
						  placeholder="Password" required/>
					  </div>
					  <div className="row mb-3">
						{/* <!-- Remember Box --> */}
			        <div className="col-auto d-flex align-items-center">
			          <div className="custom-control custom-checkbox">
			            <input type="checkbox" className="custom-control-input" id="cb1"/>
			                <label className="custom-control-label" htmlFor="cb1">Remember me</label>
			          </div>
				        </div>
			   	    </div>
			   	  {/* <!-- Login Button --> */}
		        <div className="mb-3"> 
						  <button type="submit" className="btn btn-block" onClick={loginsubmit}>Login</button>
					  </div>
					  <div className="text-right ">
		          <Link to="/resetpassword" className="forget-link">Forgot password?</Link>
		        </div>
					  <div className="text-center mb-2">
	            <div className="text-center mb-3" style={{color: "#777"}}>or login with</div>
		                   	
	            {/* <!-- Facebook Button --> */}
	              <Link to="" className="btn btn-social btn-facebook"><FaFacebook /></Link>

              {/* <!-- Google Button --> */}
						    <Link to="" className="btn btn-social btn-google"><FaGoogle /></Link>

						  {/* <!-- Twitter Button --> */}
						    <Link to="" className="btn btn-social btn-twitter"><FaTwitter /></Link>
					  </div>
					  <div className="text-center mb-5" style={{color: "#777"}}>Don't have an account? 
						  <Link className="register-link" to="/signup">Register here</Link>
			      </div>
				  </form>
			    </div>
			    {/* <!-- FORM END --> */}
	
			    <div className="col-md-1 infinity-right-space"></div>
		    </div>
	    </div>
  </div>
  )
}

export default Signin
