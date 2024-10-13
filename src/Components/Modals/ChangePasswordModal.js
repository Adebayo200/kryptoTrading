import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataControlContext } from '../../Context/DataControlContext'


const ChangePasswordModal = () => {
    const navigate = useNavigate()
     const {  showChangePasswordModal,
              setShowChangePasswordModal,
              toggleChangePasswordModal} = useContext(DataControlContext)
  return (
   <div className="fixed w-screen h-screen top-0 bg-gray bg-opacity-50   flex items-center justify-center z-50">
          {/* Modal content */}
          <div className="bg-white w-4/5 md:w-1/2 p-6 rounded shadow-lg flex flex-col items-center">
            {/* <h2 className="text-2xl font-semibold mb-4">Modal Title</h2> */}
            <p className="mb-6 text-blue text-center">
             you have successfully changed Your password
            </p>
            <button
              onClick={()=>{
                setShowChangePasswordModal(false)
                navigate("/")
              }}
              className="mt-4 bg-blue text-white py-2 px-4 rounded font-semibold w-[60%] md:w-[40%]"
            >
             Home
            </button>
          </div>
        </div>
  )
}

export default ChangePasswordModal
