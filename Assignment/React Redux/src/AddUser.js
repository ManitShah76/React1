import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './UserReducer'
import { useNavigate } from 'react-router-dom';


function AddUser() {
    
    const [name,setName] = useState("")
    const [salary,setSalary] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(name=="" || salary=="")
        {
          alert("Invalid Data...!")
        }
        else{
          fetch('http://localhost:5000/employees',{
            method:"post",
            headers:{"content-type":"Application/json"},
            body:JSON.stringify({name,salary})
          })
        }

        dispatch(addUser({name,salary}))
        navigate('/home')
    }
    
  return (
    <div>
      <div className='container w-50 text-start'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name:</label>
                <input className='form-control' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <div className='form-group'>
                <label>Salary:</label>
                <input className='form-control' type='text' value={salary} onChange={(e)=>{setSalary(e.target.value)}}></input>
            </div>
            <div>
                <button className="btn btn-success my-3">Send</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser
