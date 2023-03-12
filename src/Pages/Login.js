import { Button } from '@mui/material'
import React from 'react'
import LeftSection from '../Components/LoginComp/LeftSection'
import RightSection from '../Components/LoginComp/RightSection'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
        <RightSection />
        <LeftSection />
        <Button ><Link to="home" >sdsadasd</Link> </Button>
    </div>
  )
}

export default Login