import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const LandingPageNav = () => {
  return (
    <nav className='flex justify-between px-4 py-4 lg:text-lg xl:text-sm   shadow-md'>
       <h1 className='font-bold text-blue  font-sarpanch xl:text-[1.1rem]'>KRYPTOTRADE</h1>
     
     <NavigateLinksForDesktop/>
       {/* LOGIN AND SIGNUP btn for destop */}

<SignInAndSignUpForDesktop/>
{/* bars btn for mobile and table */}
     <button className='lg:hidden'><FaBars/></button>
    </nav>
  )
}
export default LandingPageNav


const NavigateLinksForDesktop = ()=>{
    return (
          <div className='hidden lg:flex w-[30%] justify-between xl:text-[0.7rem]'>
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>ABOUT</Link>
        <Link to={"/"}>PLANS</Link>
        <Link to={"/"}>CONTACT</Link>
       </div>
    )
}

const SignInAndSignUpForDesktop = ()=>{

    return(
        <div className='hidden w-[15%] xl:w-[8%] lg:flex justify-between xl:text-[0.7rem]'> 
    <Link to={"/"}>LOGIN</Link>
    <Link to={"/"}>SIGN UP</Link>
     </div>
    )
}