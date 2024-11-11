import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


    const inputFormClass = "border-2 border-blue w-full md:h-10 h-10 px-2 mt-3 "
    const inputFormClassEmail ="border-[1px] border-blue w-full md:h-10 h-10 px-2 mt-3"
    const labelFromClass = "lg:text-lg md:text-md text-sm" 
    const eachFromSectionClass ="mx-auto w-full my-[2px]"
    const eachFromSectionClassEmail ="mx-auto w-[90%] my-2"

const Login = () => {
  const {userLoginDetails,setUserLoginDetails,signIn,userActive,userInfo,userLoading,setUserLoading} = useContext(UserContext)

      const navigate = useNavigate()
      

      
  useEffect(()=>{
   
    if (userInfo.email) {
      navigate("/")
      }
      
      console.log(userActive,userInfo);

  },[userActive,userInfo,userLoading])


   
  return (
    <div className='xl:flex'>
<div className='text-white min-h-screen xl:flex xl:flex-col xl:items-center xl:justify-center hidden xl:block w-[50%] bg-blue'>
    <h1 className='font-bold text-[4rem] font-sarpanch'>KRYPTOTRADE</h1>
    <p className='w-[50%]'>"Join thousands of investors who trust us to simplify and secure their crypto journey."</p>
</div>

        <article className='flex flex-col items-center pt-8 mdmt-8 mt-32 md:gap-y-0 gap-y-4 w-[100%] xl:w-[50%]'>

  <header className='flex flex-col items-center gap-y-2'>
  <h1 className='text-blue font-sarpanch font-bold text-[1.7rem]'>KRYPTOTRADE</h1>
  <p className=''>Login</p>
  </header>


  <form action="" onSubmit={signIn} className='w-full flex flex-col '>
    <div className='md:mx-8'>
    {/* email */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="email" className={labelFromClass}>Email Address</label>
    <br />
    <input type="email"
    id='email'
    name ="email"
    className={ inputFormClassEmail}
    value={userLoginDetails.email}
    onChange={(e)=>{
        setUserLoginDetails({...userLoginDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    
    {/* password */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="password" className={labelFromClass}>Password</label>
    <br />
    <input type="password"
    id='password'
    name ="password"
    className={ inputFormClassEmail}
    value={userLoginDetails.password}
    onChange={(e)=>{
        setUserLoginDetails({...userLoginDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    

    <section className='flex flex-col items-center gap-y-3 my-8'>
       <button className='bg-blue focus:opacity-60 text-white  w-[160px] h-[50px] flex items-center justify-center rounded-md hover:opacity-70 focus:opacity-70' type='submit' > 
          {userLoading ? <img src="/images/white-spinner.svg" alt="spinner" className='w-[30px] h-[30px]' />  : "Login"}
        </button>
      <Link to={"/forgotpassword"} className='text-md underline'>forgot password?</Link>
      <div  className=''>don't have an account? 
        <Link to={"/register"} className='text-blue mx-2 underline'>Sign up</Link>
      </div>
    </section>
    </div>

 
  </form>
    </article>
    </div>
  )
}

export default Login
