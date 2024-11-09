import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DataSpinner from '../Components/DataSpinner'

const VerifyEmail = () => {
  const [emailVerified,setEmailVerified] = useState(false)
  const [counter,setCounter] = useState(0)

  const {id} = useParams()
  const navigate = useNavigate()

const postData = async () => {
  if (!id) {
    alert("something is wrong")
    return 
  }
    try {
    const response = await fetch("https://kryptotradingbackend.com.ng/Api/verify.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        email:id
    }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Success:', data);
    if (data.status) {
      setEmailVerified(true)
    }
  } catch (error) {
    // console.error('Error:', error);
    alert("something went wrong")
  }
  };
  useEffect(()=>{
//     if (counter === 5) {
//   setEmailVerified(true)
//   return
// }
console.log(id);
postData()
// const intervalId = setInterval(() => {
//   setCounter(prev => prev  + 1)
// }, 1000);

// if (counter === 5) {
//   setEmailVerified(true)

//   return ()=> clearInterval(intervalId)
// }

// return ()=> clearInterval(intervalId)
},[])


if (!emailVerified) {
  return(
   <aside className='w-screen h-screen flex justify-center items-center flex flex-col'>
    <img src="/images/another-spinner.svg" alt="spinner" className='w-[15%] md:w-[10%] xl:w-[10%]' />
    <h1 className='text-center text-blue font-semibold'>Verifying your email...</h1>
  </aside>
  )
}  


  return (
      <aside className='w-screen h-screen flex justify-center items-center flex flex-col'>

      <h1 className='text-blue'>Email successfully verified </h1>
      <button className='bg-blue px-4 py-2 rounded-md font-semibold text-white' onClick={()=> navigate("/login")}>Login</button>

    </aside>
  )
}

export default VerifyEmail
