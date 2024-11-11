import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



    const inputFormClass = "border-2 border-blue w-full md:h-10 h-10 px-2 mt-3 "
    const inputFormClassEmail ="border-[1px] border-blue w-full md:h-10 h-10 px-2 mt-3"
    const labelFromClass = "lg:text-lg md:text-md text-sm" 
    const eachFromSectionClass ="mx-auto w-full my-[2px]"
    const eachFromSectionClassEmail ="mx-auto w-[90%] my-2"

const NewPassword = () => {
    const [newPassword,setNewPassword] = useState(null)
    const [verificationCode,setVerificationCode] = useState(null)
    const [updatePasswordLoading,setUpdatePasswordLoading] = useState(false)
      const [success,setSuccess] = useState(false)

      const navigate = useNavigate()
      const postData = async (e) => {
        e.preventDefault()
        if (!verificationCode || !newPassword) {
            alert("empty field")
        }

        setUpdatePasswordLoading(true)
    try {
    const response = await fetch("https://kryptotradingbackend.com.ng/Api/password_verification.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        email:localStorage.getItem("forgotPasswordEmail"),
        token:verificationCode,
        newPassword:newPassword
    }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    if (data.status) {
        setUpdatePasswordLoading(false)
        setSuccess(true)
    }
    console.log('Success:', data);
} catch (error) {
    alert("an error occured")
    console.error('Error:', error);
    setUpdatePasswordLoading(false)
  }
  };




   
  return (
    <div className='xl:flex'>
   {success && <div className="trans fixed w-screen h-screen top-0  bg-opacity-80   flex items-center justify-center z-50" >
          {/* Modal content */}
          <div  className="bg-white w-4/5 md:w-1/2 p-6 rounded shadow-lg flex flex-col items-center">
            {/* <h2 className="text-2xl font-semibold mb-4">Modal Title</h2> */}
            <p className="mb-6 text-blue text-center">
            you have successfully updated your password
            </p>
            <button
              onClick={()=>{
            setSuccess(false)
             navigate("/login")
              }}
              className="mt-4 bg-blue text-white py-2 px-4 rounded font-semibold w-[60%] md:w-[40%]"
            >
             Login
            </button>
          </div>
        </div>}

<div className='text-white min-h-screen xl:flex xl:flex-col xl:items-center xl:justify-center hidden xl:block w-[50%] bg-blue'>
    <h1 className='font-bold text-[4rem] font-sarpanch'>KRYPTOTRADE</h1>
    <p className='w-[50%]'>"Join thousands of investors who trust us to simplify and secure their crypto journey."</p>
</div>

        <article className='flex flex-col items-center pt-8 mdmt-8 mt-32 md:gap-y-0 gap-y-4 w-[100%] xl:w-[50%]'>

  <header className='flex flex-col items-center gap-y-2'>
  <h1 className='text-blue font-sarpanch font-bold text-[1.7rem]'>KRYPTOTRADE</h1>
  <p className=''>Update Password</p>
  </header>


  <form action="" onSubmit={postData} className='w-full flex flex-col '>
    <div className='md:mx-8'>
    {/* email */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="email" className={labelFromClass}>Email Address</label>
    <br />
    <input type="email"
    id='email'
    name ="email"
    className={ inputFormClassEmail}
    readOnly
    value={localStorage.getItem("forgotPasswordEmail")}
    // onChange={(e)=>{
    //     setUserLoginDetails({...userLoginDetails,[e.target.name]:e.target.value })
    // }}
    />
    </section>
    
    {/* Code */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="code" className={labelFromClass}>Enter the verification code</label>
    <br />
    <input type="text"
    id='code'
    name ="code"
    className={ inputFormClassEmail}
    value={verificationCode}
    onChange={(e)=>{
      setVerificationCode(e.target.value)
    }}
    />
    </section>

    {/* New Password */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="new-password" className={labelFromClass}>Enter New Password</label>
    <br />
    <input type="text"
    id='new-password'
    name ="new-password"
    className={ inputFormClassEmail}
    value={newPassword}
    onChange={(e)=>{
      setNewPassword(e.target.value)
    }}
    />
    </section>
    

    <section className='flex flex-col items-center gap-y-3 my-8'>
       <button className='bg-blue focus:opacity-60 text-white  w-[160px] h-[50px] flex items-center justify-center rounded-md hover:opacity-70 focus:opacity-70' type='submit' > 
          {updatePasswordLoading ? <img src="/images/white-spinner.svg" alt="spinner" className='w-[30px] h-[30px]' />  : "Submit"}
        </button>
    </section>
    </div>

 
  </form>
    </article>
    </div>
  )
}

export default NewPassword
