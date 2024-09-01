import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


    const inputFormClass = "border-2 border-blue w-full h-16 px-2 mt-3 text-xl"
    const inputFormClassEmail ="border-[1px] border-blue w-full h-16 px-2 mt-3 text-xl"
    const labelFromClass = "text-lg" 
    const eachFromSectionClass ="mx-auto w-full my-2"
    const eachFromSectionClassEmail ="mx-auto w-[90%] my-2"

const Login = () => {
    const [userDetails,setUserDetails] = useState({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        username:""
    })



const postData = async (e) => {
    e.preventDefault()
  try {
    const response = await fetch('https://eskanor.com.ng/Api/Api/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:5,
        first_name:userDetails.firstName,
        last_name:userDetails.lastName,
        email:userDetails.lastName,
        username:userDetails.lastName,
        pwd:userDetails.password,
    }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};


useEffect(()=>{
console.log(userDetails);
},[userDetails])

  return (
    <div className='xl:flex'>
<div className='text-white h-screen xl:flex xl:flex-col xl:items-center xl:justify-center hidden xl:block w-[50%] bg-blue'>
    <h1 className='font-bold text-[4rem] font-sarpanch'>KRYPTOTRADE</h1>
    <p className='w-[50%]'>"Join thousands of investors who trust us to simplify and secure their crypto journey."</p>
</div>

        <article className='flex flex-col items-center pt-8 mdmt-8 mt-32 md:gap-y-0 gap-y-4 w-[100%] xl:w-[50%]'>

  <header className='flex flex-col items-center gap-y-2'>
  <h1 className='text-blue font-sarpanch font-bold text-[1.7rem]'>KRYPTOTRADE</h1>
  <p className=''>Create Account</p>
  </header>


  <form action="" onSubmit={postData} className='w-full flex flex-col '>
    <div className='md:mx-8'>
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
    
    {/* password */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="password" className={labelFromClass}>Password</label>
    <br />
    <input type="password"
    id='password'
    name ="password"
    className={ inputFormClassEmail}
    value={userDetails.email}
    onChange={(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    

    <section className='flex flex-col items-center gap-y-3 my-8'>
        <button className='bg-blue text-white px-6 md:px-12 py-2 rounded-md' type='submit' >Sign in</button>
      <Link to={""} className='text-md underline'>forget password?</Link>
      <div  className=''>Dont have a account? 
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
