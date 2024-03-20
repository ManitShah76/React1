import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <div>
      <Link to='service1'>Service 1</Link>{" "}
      <Link to='service2'>Service 2</Link>
      <Outlet/>
    </div>
  )
}

export default Services
