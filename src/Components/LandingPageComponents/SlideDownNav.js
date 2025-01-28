import React, { useContext } from 'react'
import { DataControlContext } from '../../Context/DataControlContext'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const SlideDownNav = () => {
  const {navOpen,setNavOpen,toggleNavbar,footerDiv,aboutDiv,planstDiv} = useContext(DataControlContext)
     const {userInfo} = useContext(UserContext)


const handleSignOut = ()=>{
  window.location.reload()
localStorage.removeItem("myInfos")
setNavOpen(false)

}

const navigate = useNavigate()


  return (
  <div
        className={`slide-navbar-container lg:hidden ${
          navOpen ? 'slide-down' : 'slide-up'
        } fixed top-0 left-0 w-full  bg-gray-800 text-blue font-poppins bg-white shadow-lg z-40 flex justify-between items-start`} 
      >
        <ul className="px-4 py-8 w-[80%] ">
          <li className="mb-2 cursor-pointer hover:bg-blue hover:text-white focus:bg-blue focus:text-white rounded-lg" 
          onClick={()=>{
      
            if (!userInfo.email) {
              alert("please sign in")
              
              return
            }
           
            setNavOpen(false)


          } 
          }>
           {userInfo.email && <a href='/dashboard' className="block py-2 px-4 hover:bg-gray-700 rounded uppercase">
              dashboard
            </a>}
           {!userInfo.email && <span  className="block py-2 px-4 hover:bg-gray-700 rounded uppercase">
              dashboard
            </span>}
          </li>
          <li className="mb-2 cursor-pointer hover:bg-blue hover:text-white focus:bg-blue focus:text-white rounded-lg" 
          onClick={()=>{
           
        if (aboutDiv.current) {
          setNavOpen(false)
      aboutDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
        }}
          >
            <button className="block py-2 px-4 hover:bg-gray-700 rounded uppercase">
              About
            </button>
          </li>
          <li className="mb-2 cursor-pointer hover:bg-blue hover:text-white focus:bg-blue focus:text-white rounded-lg" 
           onClick={()=>{
           
        if (planstDiv.current) {
          setNavOpen(false)
      planstDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
        }}
          >
            <button className="block py-2 px-4 hover:bg-gray-700 rounded uppercase">
              plans
            </button>
          </li>
          <li className='cursor-pointer hover:bg-blue hover:text-white focus:bg-blue focus:text-white rounded-lg' 
             onClick={()=>{
           
        if (footerDiv.current) {
          setNavOpen(false)
      footerDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
        }}
          > 
            <button className="block py-2 px-4 hover:bg-gray-700 rounded uppercase">
              Contact
            </button>
          </li>
         {userInfo.email &&   <li className='cursor-pointer hover:bg-blue hover:text-white focus:bg-blue focus:text-white rounded-lg' 
         onClick={()=> navigate("/resetpassword")}
          > 
            <button className="block py-2 px-4 hover:bg-gray-700 rounded uppercase">
              Reset Password
            </button>
          </li>}
         {userInfo.email && <li className='cursor-pointer focus:text-red-800' onClick={handleSignOut}> 
            <button className="block py-2 px-4 rounded uppercase text-red-500">
              Log out
            </button>
          </li>}
        </ul>

        <button b onClick={()=> setNavOpen(false)} className='text-blue font-bold text-2xl px-4 mt-8 ' > < IoClose className='text-blue font-bold text-2xl' /></button>
      </div>
    
  )
}

export default SlideDownNav

