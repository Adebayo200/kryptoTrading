import React, { useContext, useState,useEffect } from 'react'
import { UserContext } from '../Context/UserContext'
import { DataControlContext } from '../Context/DataControlContext'
import { Link } from 'react-router-dom'
import ChangePasswordModal from '../Components/Modals/ChangePasswordModal.js'
import { useNavigate } from 'react-router-dom';


  const inputFormClass = "border-2 border-blue w-full md:h-10 h-10 px-2 mt-3 "
    const inputFormClassEmail ="border-[1px] border-blue w-full md:h-10 h-10 px-2 mt-3"
    const labelFromClass = "lg:text-lg md:text-md text-sm" 
    const eachFromSectionClass ="mx-auto w-full my-[2px]"
    const eachFromSectionClassEmail ="mx-auto w-[90%] my-2"

const ChangeMyPassword = () => {
    const {changePassword,changePasswordDetails,
 setChangePasswordDetails,userInfo,userLoading} = useContext(UserContext)
 const {showChangePasswordModal,
setShowChangePasswordModal,toggleChangePasswordModal} = useContext(DataControlContext)
const navigate = useNavigate()

useEffect(()=>{
if (!userInfo.email) {
  navigate("/")
}
},[])



useEffect(()=>{
  setChangePasswordDetails({...changePasswordDetails,id:userInfo.id})
  console.log(changePasswordDetails);
  
},[changePasswordDetails.newPassword])

  return (
    <div className='xl:flex' >
        {showChangePasswordModal && <ChangePasswordModal/>}
<div className='text-white min-h-screen xl:flex xl:flex-col xl:items-center xl:justify-center hidden xl:block w-[50%] bg-blue'>
    <h1 className='font-bold text-[4rem] font-sarpanch'>KRYPTOTRADE</h1>
    <p className='w-[50%]'>"Join thousands of investors who trust us to simplify and secure their crypto journey."</p>
</div>

        <article className='flex flex-col items-center pt-8 mdmt-8 mt-32 md:gap-y-0 gap-y-4 w-[100%] xl:w-[50%]'>
      <header className='flex flex-col items-center gap-y-2'>
  <h1 className='text-blue font-sarpanch font-bold text-[1.7rem]'>KRYPTOTRADE</h1>
  <p className=''>Reset Password</p>
  </header>


  <form action="" onSubmit={changePassword} className='w-full flex flex-col '>
    <div className='md:mx-8'>
    {/* email */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="currentPassword" className={labelFromClass}>Current password</label>
    <br />
    <input type="password"
    id='currentPassword'
    name ="currentPassword"
    className={ inputFormClassEmail}
    value={changePasswordDetails.currentPassword}
    onChange={(e)=>{
       setChangePasswordDetails({...changePasswordDetails,[e.target.name]:e.target.value })
    }}
    />
    </section>
    
    {/* password */}
    <section className={eachFromSectionClassEmail}>
    <label htmlFor="newPassword" className={labelFromClass}>New password</label>
    <br />
    <input type="password"
    id='newPassword'
    name ="newPassword"
    className={ inputFormClassEmail}
    value={changePasswordDetails.newPassword}
    onChange={(e)=>{
        setChangePasswordDetails({...changePasswordDetails,[e.target.name]:e.target.value })
    }}
    />
     {changePasswordDetails.newPassword.length < 8 && <label className={"lg:text-lg md:text-md text-sm text-red-500"}>Password must be more than 8 characters</label>}
    </section>
    

    <section className='flex flex-col items-center gap-y-3 my-8'>
       <button className='bg-blue focus:opacity-60 text-white  w-[160px] h-[50px] flex items-center justify-center rounded-md hover:opacity-70 focus:opacity-70' type='submit' > 
          {userLoading ? <img src="/images/white-spinner.svg" alt="spinner" className='w-[30px] h-[30px]' />  : "Confirm"}
        </button> 
    </section>
    </div>

 
  </form>
  </article>
    </div>
  )
}

export default ChangeMyPassword
