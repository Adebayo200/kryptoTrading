import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingPageNav from '../Components/LandingPageComponents/Navbar'
import HeroSection from '../Components/LandingPageComponents/HeroSection'
import AboutUs from '../Components/LandingPageComponents/AboutUs'
import WhatWeDo from '../Components/LandingPageComponents/WhatWeDo'
import { UserContext } from '../Context/UserContext'
import WhyInvest from '../Components/LandingPageComponents/WhyInvest'
import InvestmentPlans from '../Components/LandingPageComponents/InvestmentPlans'
import MinningPlans from '../Components/LandingPageComponents/InvestmentPlans'
import MiningPlans from '../Components/LandingPageComponents/MinningPlans'
import OurMetrics from '../Components/LandingPageComponents/OurMetrics'


const Home = () => {

      const navigate = useNavigate()
      const {userActive,userInfo} = useContext(UserContext)



//     useEffect(()=>{
//       console.log(userInfo);
// if (!userActive) {
//     navigate("/register")
// }
// else{
//   navigate("/")
// }


//     },[userActive,userInfo])
  
  return (
    <div >
   <LandingPageNav/>
   <HeroSection/>
   <AboutUs/>
   <WhatWeDo/>
   <WhyInvest/>
   <InvestmentPlans/>
  <MiningPlans/>
  <OurMetrics/>
    </div>
  )
}

export default Home



const Former = ()=>{


  return (
    <>
       <h1 className='text-center'>Landing Page</h1>
      <div className='flex gap-4 justify-center items-center my-2'>
      <Link to={"/register"} className='bg-blue px-4 py-2 text-white rounded-md'>Register</Link>
      <Link to={"/login"}  className='bg-blue px-4 py-2 text-white rounded-md'>Login</Link>
      </div>
    </>
  )
}