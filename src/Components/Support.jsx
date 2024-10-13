import React, { useEffect, useState } from 'react'
import { IoHelpSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";

const CustomerSupport = () => {
    const [widthClass,setWidthClass] = useState("")
    const [increaseWidth,setIncreaseWidth] = useState(false)

    useEffect(()=>{
if (increaseWidth) {
    setWidthClass("addWidth")
}
else{
    setWidthClass("removeWidth zoomInOut")
}
    },[increaseWidth])
  return (
    <div>
        <article  className={`support  ${widthClass} bg-blue
         items-center`} onClick={()=> setIncreaseWidth(prev => !prev) } >
      {!increaseWidth && <span className='text-white inline-block'>
        <IoHelpSharp  />
        </span>}
 {increaseWidth &&  (  
    <>
    <span className='text-white' onClick={()=>{
       const phoneNumber = "13094729020";
    const message = "Hello, I would like to inquire about your services.";
    const url = `https://wa.me/${phoneNumber}`;
     
      window.open(url, "_blank")
    }} > 
    <FaWhatsapp />
    </span>
    <span className='text-white' onClick={()=>{
 const email = "Kryptotrade.kt@gmail.com"; // Replace with the recipient's email
    const subject = "Inquiry About Services"; // Subject of the email
    const body = "Hello, I would like to inquire about your services."; // Body of the email
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client (Gmail, etc.) with the pre-filled email
    window.location.href = mailtoLink;

    }}>
    < MdOutlineMail />
    </span>
    </>
    
    ) }
        </article>
    </div>
  )
}

export default CustomerSupport
