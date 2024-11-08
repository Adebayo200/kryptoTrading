import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VerifyEmail = () => {

  const {id} = useParams()
  useEffect(()=>{
console.log(id);

  },[])
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
  } catch (error) {
    console.error('Error:', error);
  }
  };

  return (
    <div>
      <h1>Verify email </h1>
      <button onClick={postData} className='bg-blue text-white font-semibold' >Verify</button>
    </div>
  )
}

export default VerifyEmail
