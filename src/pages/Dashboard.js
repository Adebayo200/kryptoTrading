import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Dashboard = () => {
       const navigate = useNavigate()
      const {userActive,userInfo} = useContext(UserContext)

      useEffect(()=>{

console.log(userInfo);
console.log(userActive);
if (!userActive) {
    navigate("/register")
    
}

      },[userActive,userInfo])


  return (
    <div>
    <h1 className='text-center'>hello <span className='font-bold capitalize'>
      {userInfo.first_name}
      </span>
      </h1>

    <div className='flex items-center justify-center'>

      <Link to={"/"} className='bg-blue px-4 py-2 text-white rounded-md hover:opacity-70 focus:opacity-70'>home</Link>
    </div>
    </div>
  )
}

export default Dashboard
