import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Viewuser() {
    const { vid } = useParams();

  // console.log(eid)


  const [employees] = useSelector((state) => state.emp);

  // console.log(employees)

  const employee = employees.filter((item)=>{
    return item.id == vid
  })

  const {name,salary} = employee[0];
  return (
    <div>
      <h1>ID:</h1>
      <h1>Name:</h1>
      <h1>Salary:</h1>
    </div>
  )
}

export default Viewuser
