import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, userData } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [employees] = useSelector(state=>state.emp);

    useEffect(()=>{
        fetch('http://localhost:5000/employees')
        .then((res)=>{return res.json()})
        .then((data)=>{
            dispatch(userData(data))
        })
    },[])

    const handleAdd = ()=>{
        navigate('/add')
    }

    const handleEdit = (userid)=>{
        navigate('/edit/' +userid)
    }

    const handleView = (userId)=>{
        navigate('/view/'+userId)
    }

    const handleDelete = (userId)=>{
        dispatch(deleteUser({id:userId}))

        // console.log(userId)
    }

  return (
    <div className='container'>
        <button className='btn btn-info m-3' onClick={()=>{handleAdd()}}>AddUser</button>
      <table className='table'>
        <thead className='table-dark'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employees && employees.map((v)=>(
            <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.salary}</td>
                <td>
                    <button className='btn btn-primary mx-3' onClick={()=>{handleView(v.id)}}>View</button>
                    <button className='btn btn-success mx-3' onClick={()=>{handleEdit(v.id)}}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>{handleDelete(v.id)}}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
