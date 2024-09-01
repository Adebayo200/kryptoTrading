import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  
  return (
    <div >
      <h1 className='text-center'>Landing Page</h1>
      <div className='flex gap-4 justify-center items-center my-2'>
      <Link to={"/register"} className='bg-blue px-4 py-2 text-white rounded-md'>Register</Link>
      <Link to={"/login"}  className='bg-blue px-4 py-2 text-white rounded-md'>Login</Link>
      </div>
    </div>
  )
}

export default Home
