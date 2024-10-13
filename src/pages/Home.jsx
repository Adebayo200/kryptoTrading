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
import TopInvestors from '../Components/LandingPageComponents/TopInvestors'
import FrequentlyAsked from '../Components/LandingPageComponents/FrequentlyAsked'
import RecentVentures from '../Components/LandingPageComponents/RecentVentures'
import CustomerSupport from '../Components/Support'
import Footer from '../Components/LandingPageComponents/Footer'
import { DataControlContext } from '../Context/DataControlContext'
import DataSpinner from '../Components/DataSpinner'
import SlideDownNav from '../Components/LandingPageComponents/SlideDownNav'
import { FaArrowUp } from "react-icons/fa6";


const Home = () => {

      const navigate = useNavigate()
      const {userActive,userInfo} = useContext(UserContext)
      const {loading,investmentDataLoading,minningDataLoading} = useContext(DataControlContext)



//     useEffect(()=>{
//       console.log(userInfo);
// if (!userActive) {
//     navigate("/register")
// }
// else{
//   navigate("/")
// }


//     },[userActive,userInfo])
useEffect(()=>{
console.log(loading,"here loading");
console.log(investmentDataLoading,minningDataLoading,"from home");
},[investmentDataLoading,minningDataLoading,loading])


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

if (loading) {
  return(
    <DataSpinner/>
  )
}  

  return (
    <div >
      <button 
      onClick={scrollToTop}
      className='fixed w-[50px] h-[50px] bottom-[1%] right-[10%] bg-blue text-white font-bold flex items-center justify-center rounded-lg'><FaArrowUp className='text-white font-bold' /></button>
      <SlideDownNav/>
      <CustomerSupport/>
      <LandingPageNav/>
      <HeroSection/>
      <AboutUs/>
      <WhatWeDo/>
      <WhyInvest/>
      <InvestmentPlans/>
      <MiningPlans/>
      <OurMetrics/>
      <TopInvestors/>
      <FrequentlyAsked/>
      <RecentVentures/>
      <Footer/>
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