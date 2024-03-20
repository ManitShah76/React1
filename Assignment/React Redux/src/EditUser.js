import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from "./UserReducer";
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { eid } = useParams();

  // console.log(eid)


  const [employees] = useSelector((state) => state.emp);

  // console.log(employees)

  const employee = employees.filter((item)=>{
    return item.id == eid
  })

  // console.log(employee[0])

  const {name,salary} = employee[0];

  // const [uid,setuid] = useState(id)
  const [uname, setuName] = useState(name);
  const [usalary, setuSalary] = useState(salary);

  useEffect(()=>{
    fetch('http://localhost:5000/employees/'+eid)
    .then((res)=>{return res.json()})
    .then((data)=>{

    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editUser({id:eid,name:uname,salary:usalary}))
    navigate('/home')
  };

  return (
    <div>
      <div className='container w-50 text-start'>
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label>ID</label>
            <input disabled={"disabled"} value={uid} className="form-control" type="text"></input>
          </div> */}
            <div className='form-group'>
                <label>Name:</label>
                <input className='form-control' type='text' value={uname} onChange={(e)=>{setuName(e.target.value)}}></input>
            </div>
            <div className='form-group'>
                <label>Salary:</label>
                <input className='form-control' type='text' value={usalary} onChange={(e)=>{setuSalary(e.target.value)}}></input>
            </div>
            <div>
                <button className="btn btn-success my-3">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser
