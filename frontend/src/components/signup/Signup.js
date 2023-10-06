import React, { useState } from 'react'
import './Signup.css'
// import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaLock,FaTwitter,FaGoogle,FaFacebook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import axios from 'axios'

function Signup() {
	const navigate=useNavigate()
	const [name,setname]=useState("")
	const [password,setPassword]=useState("")
	const [gmail,setGmail]=useState("")
	const response={};
	const signupsubmit=async()=>{
		try{
		const user={
			name:name,
			gmail:gmail,
			password:password
		}
		 response= await axios.post('http://localhost:5000/api/user/register',user)
	}catch(e){
			console.log(e.message);
	}

	}
	if(response.status===200)
	 navigate.to('/signin');


  return (
    <div>
      <div  className="container infinity-container">
		    <div  className="row">
			  <div  className="col-md-1 infinity-left-space"></div>

			  {/* <!-- FORM BEGIN --> */}
			  <div  className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
				  {/* <!-- Company Logo --> */}
				  <div  className="text-center mb-3 mt-5">
				  </div>
				  <div  className="text-center mb-4">
					  <h4>Create an account</h4>
				  </div>
				  {/* <!-- Form --> */}
				  <form  className="px-3">
					  {/* <!-- Input Box --> */}
					  <div  className="form-input">
						  <span><FaUser/></span>
						  <input type="text" name="fullname" value={name} onChange={(e)=>{setname(e.target.value)}} 
						  placeholder="Full Name" tabIndex="10"/>
					  </div>
					  <div  className="form-input">
						  <span><FaEnvelope/></span>
						  <input type="email" name="email" value={gmail} onChange={(e)=>{setGmail(e.target.value)}}
						  placeholder="Email Address" tabIndex="10"/>
					  </div>
					  <div  className="form-input">
						  <span><FaLock /></span>
						  <input type="password" name="password"
						  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
					  </div>
					  {/* <!-- Register Button --> */}
		        <div  className="mb-3"> 
						  <button type="submit"  className="btn btn-block" onClick={signupsubmit}>Register</button>
					  </div>
					  <div  className="text-center mb-2">
	          <div  className="text-center mb-3" style={{color:" #777"}}>or register with</div>

	          {/* <!-- Facebook Button --> */}
	          <Link to=""  className="btn btn-social btn-facebook"><FaFacebook /></Link>

            {/* <!-- Google Button --> */}
						<Link to=""  className="btn btn-social btn-google"><FaGoogle /></Link>

						{/* <!-- Twitter Button --> */}
						<Link to=""  className="btn btn-social btn-twitter"><FaTwitter/></Link>
					  </div>
					<div  className="text-center mb-5" style={{color:" #777"}}>Already have an account? 
						<Link  className="login-link" to="/signin">Login here</Link>
			    </div>
				  </form>
			  </div>
			{/* <!-- FORM END --> */}

			<div  className="col-md-1 infinity-right-space"></div>
		    </div>
	    </div>
    </div>
  )
}

export default Signup
