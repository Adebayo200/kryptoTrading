import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VerifyEmail = () => {

  const {id} = useParams()
  useEffect(()=>{
console.log(id);

  },[])

  return (
    <div>
      <h1>Verify email </h1>
    </div>
  )
}

export default VerifyEmail
