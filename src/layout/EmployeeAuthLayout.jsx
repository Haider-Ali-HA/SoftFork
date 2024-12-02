import React from 'react'
import Navbar1 from "../components/organizationAuth/Navbar1";
import { Outlet } from "react-router-dom";

const EmployeeAuthLayout = () => {
  return (
    <div>
    <Navbar1 />
    <div>
      <Outlet />
    </div>
  </div>
  )
}

export default EmployeeAuthLayout
