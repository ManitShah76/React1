import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [userData,setUserData] = useState("")
  const [greet,setGreet] = useState("");

  const navigate = useNavigate()

  
    
    useEffect(()=>{
        fetch('http://localhost:8500/Users')
        .then((res)=>{return res.json()})
        .then((data)=>{
            setUserData(data)
        })
    },[])
    // console.log(userData)

    const handleSubmit = (e)=>{
      e.preventDefault();
      const existingName = userData.filter((user)=>user.name == name);
      const existingpassword = userData.filter((user)=>user.password == password);
      // console.log(existingName)

      if (name === "" ||  password === "" ) {
        alert("Field are Empty..!")
    } else {
      if(existingName.length>0 && existingpassword.length>0){
        alert("Login Successfully..!")
        localStorage.setItem("name",JSON.stringify(name))
        navigate('/')
      } else{
        alert("Wrong Aurthentication..!")
      }


      // userData.map((user)=>{
      //       if(user.name === name && user.password === password){
      //         alert("Login Successfully..!")
      //         setGreet(`Welcome, ${name}`)
      //         localStorage.setItem("name",JSON.stringify(name))
      //         navigate('/')
      //       }
      //       else{
      //         alert("Wrong Aurthentication..!")
      //       }
      //   })




    }
    }


  return (
    <div>
      <div className="bg-light py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
        <div className="bg-white p-4 p-md-5 rounded shadow-sm">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="h3">Log In</h2>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row text-start gy-3 gy-md-4 overflow-hidden">
              <div className="col-12">
                <h1>{greet}</h1>
                <label  className="form-label">User Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
              </div>
              <div className="col-12">
                <label  className="form-label">Password <span className="text-danger">*</span></label>
                <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-lg btn-primary" type="submit">Log In</button>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-12">
              <hr className="mt-5 mb-4 border-secondary-subtle"/>
              <div className="col-12">
                <p className="m-0 text-secondary text-center">Create an account? <Link to='/signup' className="link-primary text-decoration-none">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Login;
