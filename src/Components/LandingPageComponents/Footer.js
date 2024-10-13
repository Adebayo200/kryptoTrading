import React, { useContext, useEffect, useRef } from 'react'
import { DataControlContext } from '../../Context/DataControlContext'

const Footer = () => {
       const {height,setHeight,investmentData,loading,footerDiv} = useContext(DataControlContext)
        const contacts = useRef()

    useEffect(()=>{
    // setHeight({...height,contact:contacts.current.getBoundingClientRect().top + window.screenY})
    // console.log(height);
    
    },[investmentData,loading])

  return (
    <div ref={footerDiv} className='bg-[#272727] text-white text-sm font-poppins font-thin'>
        <article className='mx-4 md:mx-32 xl:flex  xl:gap-x-8 xl:my-8'>
 <h1 className='font-bold text-blue font-sarpanch hidden xl:block xl:text-[1rem] xl:my-6'>KRYPTOTRADE</h1>
        {/* ABOUT US */}
    <section className='py-8 my-6 xl:my-0 xl:py-0 xl:w-[25%] xl:h-[350px]'>
<h1 className='text-lg my-6 font-medium'  >ABOUT US</h1>
<p className='w-[80%]'>At KrypToTrade, we specialize in empowering investors with secure, user-friendly cryptocurrency solutions. Our platform offers a wide range of investment and mining options, backed by expert guidance and advanced security measures. We're committed to helping you achieve financial success in the digital economy.</p>
    </section> 
{/* CONTACT */}
    <section className='xl:w-[25%] xl:h-[350px]'>
        <h1 className='text-lg my-6 font-medium'>CONTACTS</h1>
        <aside className='flex items-center justify-start space-x-2 my-2'>
           <img src="images/email-account.png" alt="email" className='w-[20px] h-[20px] ' /> <span className=''>support@Kryptotrade.com</span>
        </aside>
        <aside className='flex items-center justify-start space-x-2 my-2'>
           <img src="images/telegram.png" alt="telegram-support" 
           className='w-[20px] h-[20px] ' /> <span>Kryptotradesupport</span>
        </aside>
        <aside className='flex items-center justify-start space-x-2 my-2'>
           <img src="images/whatsapp.png" alt="whatsapp support"
           className='w-[20px] h-[20px] '
            /> <span>Kryptotradesupport</span>
        </aside>
        <aside className='flex items-center justify-start space-x-6 my-2'>
           <img src="images/location-pin.png" alt="address" 
           className='w-[20px] h-[20px] '
           /> 
           <ul className='list-disc'>
            <li>Our Location</li>
            <li>99 Embankment Cathedral, Approach Office 104</li>
            <li>Manchester, Manchester, United Kingdom, M3 7FA</li>
           </ul>
        </aside>
    </section>

{/* SERVICES */}
<section className='xl:w-[25%] xl:h-[350px] '>
<h1 className='text-lg my-6 font-medium'>SERVICES</h1>
<aside>
<article className='flex space-x-4 my-2'>
<div className='bg-blue w-[10px] h-[20px]' ></div><span className='italic'>Financial Planning</span>
</article>
<article className='flex space-x-4 my-2'>
<div  className='bg-blue w-[10px] h-[20px]'></div><span className='italic'>Investment planning</span>
</article>
<article className='flex space-x-4 my-2'>
    <div  className='bg-blue w-[10px] h-[20px]'></div><span className='italic'>Real estate</span>
</article>
<article className='flex space-x-4 my-2'>
    <div  className='bg-blue w-[10px] h-[20px]'></div><span className='italic'>Savings and investments</span>
</article>

<article className='flex space-x-4 my-2'>
    <div  className='bg-blue w-[10px] h-[20px]'></div><span className='italic'>Market research</span>
</article>
</aside>
</section>
        </article>

        <footer className='py-6 text-[gray] border-t-[1px] border-[gray] mx-4 mt-4 xl:flex xl:items-center xl:justify-between '>
            <aside className='mx-6 space-x-4'>
              <span> &copy; </span>  <span>2024 Kryptotrade All Rights Reserved</span>
            </aside>
            <aside className='mx-6 space-x-4'>
                <span>Contact us </span>
                <span>Inquire</span>
            </aside>
        </footer>
    </div>
  )
}

export default Footer
