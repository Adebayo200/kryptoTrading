import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'


    const inputFormClass = "border-[1px] border-blue w-full md:h-10 h-10 px-2 mt-3"
    const inputFormClassEmail ="border-[1px] border-blue w-full md:h-10 h-10 px-2 mt-3"
    const labelFromClass = "lg:text-lg md:text-md text-sm" 
    const eachFromSectionClass ="mx-auto w-full my-2"
    const eachFromSectionClassEmail ="mx-auto w-[90%] my-[2px]"

const Register = () => {

 const {userDetails,setUserDetails,postData, userCreated,setUserCreated} = useContext(UserContext)
   const navigate = useNavigate()

 useEffect(()=>{

  if (userCreated) {
    navigate("/login")
    setUserCreated(false)
  }

 },[userCreated])



  return (
    <div className='xl:flex'>
<div className='text-white min-h-screen xl:flex xl:flex-col xl:items-center xl:justify-center hidden xl:block w-[50%] bg-blue'>
    <h1 className='font-bold text-[2.5rem] font-sarpanch'>KRYPTOTRADE</h1>
    <p className='w-[70%] '>"Join thousands of investors who trust us to simplify and secure their crypto journey."</p>
</div>

        <article className='flex flex-col items-center pt-8 mt-8 w-[100%] xl:w-[50%]'>

  <header className='flex flex-col items-center gap-y-2'>
  <h1 className='text-blue font-sarpanch font-bold text-[1.7rem]'>KRYPTOTRADE</h1>
  <p className=''>Create Account</p>
  </header>


  <form action="" onSubmit={postData} className='w-full flex flex-col'>
    {/* name */}
    {/* input container */}
    <div>
<div className='flex flex-col md:flex-row gap-x-4 w-[90%] mx-auto'>

    <section className={eachFromSectionClass}>
    <label htmlFor="firstName" className={labelFromClass}>First name</label>
      <br />
    <input 
    type="text"
    id='firstName'
    name ="firstName"
    className={inputFormClass}
     value={userDetails.firstName}
     onChange={(e)=>{
         setUserDetails({...userDetails,[e.target.name]:e.target.value })
  }}
  />
    </section>
    <section className={eachFromSectionClass}>
    <label htmlFor="lastName" className={labelFromClass}>Last name</label>
      <br />
    <input type="text"
    id='lastName'
    name ="lastName"
     className={inputFormClass}
    value={userDetails.lastName}
    onChange={(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    </div>
    {/* email */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="email" className={labelFromClass}>Email Address</label>
    <br />
    <input type="text"
    id='email'
    name ="email"
    className={ inputFormClassEmail}
    value={userDetails.email}
    onChange={(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    {/* container for username and password */}
    <div className='flex flex-col md:flex-row gap-x-4 w-[90%] mx-auto'>

    {/* username */}
    <section className={eachFromSectionClass}>
    <label htmlFor="username" className={labelFromClass}>Username</label>
      <br />
    <input type="text"
    id='username'
    name ="username"
    className={inputFormClass}
    value={userDetails.username}
    onChange={(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    {/* password */}
    <section className={eachFromSectionClass}>
    <label htmlFor="password" className={labelFromClass}>Password</label>
      <br />
    <input type="password"
    id='password'
    name ="password"
    className={inputFormClass}
    value={userDetails.password}
    onChange={(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    </div>

    <section className='flex flex-col items-center gap-y-3 my-8'>
        <button className='bg-blue focus:opacity-60 text-white  px-6 md:px-12 py-2 rounded-md hover:opacity-70 focus:opacity-70' type='submit' >Sign up</button>
      <div  className=''>already have an account? 
        <Link to={"/login"} className='text-blue mx-2 underline'>Sign in</Link>
      </div>
    </section>
    </div>

 
  </form>
    </article>
    </div>
  )
}

export default Register
