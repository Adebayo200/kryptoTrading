import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


const HeroSection = () => {
      const {userInfo} = useContext(UserContext)
  return (
    <div className='py-10 xl:py-0 sm:px-0 px-4 font-poppins xl:flex '>
        <section className='xl:flex xl:flex-col xl:justify-between py-10 xl:pt-24 sm:px-24 xl:px-12 xl:w-[37%] overflow-hidden'>
            <h1 className=' text-lg sm:text-[2rem] sm:font-normal xl:text-[1.6rem] xl:font-semibold  xs:font-bold font-semibold mb-6'>"Unlock the Future of Finance with Secure, Seamless Crypto Investments."</h1>
            <p className='sm:text-[1.1rem]'>"Start small or go big—our platform adapts to your investment goals."</p>
      {userInfo.email ? "" :   <LoginSignUpBtnsForHeroTablet/>}
        <CurrenciesImages/>
        </section>
        <section className='xl:w-[63%] xl:h-[90vh] xl:max-h-[600px]  xl:flex xl:justify-end'>
      <img src="/images/Rectangle2.jpg" alt="image" 
      className='xl:w-[95%] object-cover' />
        </section>
{userInfo.email ? "" : <LoginSignUpBtnsForHeroMobile/>}
   
    </div>
  )
}


const LoginSignUpBtnsForHeroMobile = ()=>{
  const navigate = useNavigate()

    return (
             <section className='sm:hidden flex justify-center gap-x-6 my-8' >
            <button className='bg-blue font-semibold text-white border-[1px] rounded-xl xs:px-10 px-7 xs:py-3 py-2 text-lg'

              onClick={()=>{
                navigate("/login")
            }}
            >Login</button>
            <button  className='text-blue font-semibold border-[1px] rounded-xl xs:px-8 px-6 xs:py-3 py-2 border-blue text-lg'
              onClick={()=>{
                navigate("/register")
            }}
            >Sign up</button>
        </section>
    )
}
const LoginSignUpBtnsForHeroTablet = ()=>{

     const navigate = useNavigate()
     
    return (
             <section className='flex justify-center gap-x-20 xl:gap-x-4 my-8 xl:justify-start hidden sm:flex' >
            <button className='bg-blue font-semibold text-white border-[1px] rounded-xl xs:px-10 px-7 xs:py-3 py-2 xl:font-normal  xl:min-w-[90px] xl:py-2'
            onClick={()=>{
                navigate("/login")
            }}
            >Login</button>                         
            <button  className='text-blue font-semibold border-[1px] rounded-xl xs:px-8 px-6 xs:py-3 py-2 border-blue  xl:font-normal xl:min-w-[90px] xl:py-2'
               onClick={()=>{
                navigate("/register")
            }}
            >Sign up</button>
        </section>
    )
}

const CurrenciesImages = ()=>{

    return(
        <div className='xl:block hidden relative xl:h-[50%] xl:'>
          
           <img src="/images/btc.png" alt="btc" className='absolute top-[35%] left-[5%] xl:left-[12%] w-[40%] xl:w-[30%] z-10 rotate-[45deg]' /> 
           <img src="/images/eth.png" alt="eth"  className='absolute top-[15%] xl:top-[10%] left-[30%] w-[37%] xl:w-[27%]'/> 
           <img src="/images/usd.png" alt="usd" className='absolute top-[35%] left-[55%] xl:left-[47%]  w-[34%]  xl:w-[25%] rotate-[320deg]'/> 
           <img src="/images/usdt.png" alt="usdt" className='absolute top-[65%] left-[30%] xl:w-[30%]  w-[40%]' /> 
         
        </div>
    )
}



export default HeroSection
