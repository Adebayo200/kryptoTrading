import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { DataControlContext } from '../../Context/DataControlContext';
import { UserContext } from '../../Context/UserContext';

const LandingPageNav = () => {
    const {navOpen,setNavOpen,toggleNavbar,height,setHeight} = useContext(DataControlContext)
    
  return (
    <nav className='flex justify-between px-4 py-4 lg:text-lg xl:text-sm   shadow-md'>
       <h1 className='font-bold text-blue  font-sarpanch xl:text-[1.1rem]'>KRYPTOTRADE</h1>
     
     <NavigateLinksForDesktop/>
       {/* LOGIN AND SIGNUP btn for destop */}

<SignInAndSignUpForDesktop/>
{/* bars btn for mobile and tablet */}
     <button onClick={toggleNavbar} className='lg:hidden'><FaBars className='text-blue'/></button>
    </nav>
  )
}
export default LandingPageNav


const NavigateLinksForDesktop = ()=>{
  const {navOpen,setNavOpen,toggleNavbar,height,setHeight,footerDiv,aboutDiv,planstDiv } = useContext(DataControlContext)
  const {userInfo} = useContext(UserContext)
  const navigate = useNavigate()
    return (
          <div className='lg:block hidden lg:flex xl:w-[30%] lg:w-[40%] justify-between xl:text-[0.7rem]'>
        {/* <Link to={"/dashboard"} className='text-blue font-semibold '>DASHBOARD</Link> */}
        <button className='text-blue font-semibold'
        onClick={()=>{
if (!userInfo.email) {
  alert("please sign in")
  return
}
navigate("/dashboard")

        }}>
        DASHBOARD
        </button>
        <button onClick={()=>{
          
        if (aboutDiv.current) {
      aboutDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
        }} className='text-blue font-semibold' >ABOUT</button>
        <button 
        onClick={()=>{
          if (planstDiv.current) {
      planstDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
        }}
        className='text-blue font-semibold'>PLANS</button>
        <button 
        onClick={()=>{
          if (footerDiv.current) {
      footerDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
        }}
        className='text-blue font-semibold'>CONTACT</button>
       </div>
    )
}

const SignInAndSignUpForDesktop = ()=>{
   const {userInfo} = useContext(UserContext)
const handleSignOut = ()=>{
  window.location.reload()
localStorage.removeItem("myInfos")

}

    return(
        <div className='lg:block hidden w-[15%] xl:w-[8%] lg:flex justify-between xl:text-[0.7rem]'> 
   {userInfo.email ? <button
   className='text-red-500 font-bold'
   onClick={handleSignOut} >LOG OUT</button> : (
    <>
     <Link to={"/login"} className='text-blue font-semibold'>LOGIN</Link>
    <Link to={"/register"} className='text-blue font-semibold'>SIGN UP</Link>
    </>
   ) }
     </div>
    )
}