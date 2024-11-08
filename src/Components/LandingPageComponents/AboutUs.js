import React, { useContext, useEffect, useRef } from 'react'
import { DataControlContext } from '../../Context/DataControlContext'

const AboutUs = () => {
    const {height,setHeight,investmentData,loading,aboutDiv } = useContext(DataControlContext)
    const aboutUs = useRef(null)


    useEffect(()=>{
    // setHeight({...height,about:aboutUs.current.getBoundingClientRect().top + window.screenY})
    // console.log(height);
    
    },[investmentData,loading])
  return (
    <div className='px-8 xl:py-12' ref={ aboutDiv }>
      <h1 className='text-center xl:text-start font-semibold xl:font-semibold text-lg'>ABOUT US</h1>

      <section className='xl:flex'>
      <AboutUsArticle/>
<BoxesForAboutUs/>
      </section>
    </div>
  )
}

export default AboutUs


const AboutUsArticle = ()=>{

    return (
          <article id='about' className='xl:w-[55%] xl:flex xl:flex-col justify-between xl: xs:text-[1.1rem] xl:pt-8 '>
            <p>
<span className='text-blue font-semibold'>Kryptotrade</span> is a cutting-edge cryptocurrency investment platform designed to make digital asset trading simple, secure, and accessible to everyone. Whether you're a seasoned investor or just starting your crypto journey, our platform offers a seamless experience with a wide range of cryptocurrencies and intuitive tools to help you navigate the market with confidence.
<br />
<br />
Security is at the heart of what we do. We implement the highest standards of encryption, multi-factor authentication, and cold storage to ensure that your investments and personal data are protected at all times. Our user-friendly interface, coupled with round-the-clock customer support and a wealth of educational resources, empowers you to make informed investment decisions.
<br />
<br />
At Kryptotrade, we&rsquo;re committed to helping you achieve your financial goals in the rapidly evolving world of cryptocurrency. Join us today and discover the future of investing.</p>
        </article>
    )
}

const BoxesForAboutUs = ()=>{


    return (
<div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-10 my-6 gap-y-4 px-[1px] xxs:px-4  py-4  xl:w-[45%]  xl:my-0 '>
{BoxesDataForAboutUs.map((item,index)=>{


return (
    <section key={index} className='bg-lightBlue border-md rounded-xl xxm:w-[287px] w-[100%] mx-auto flex justify-center items-center xs:min-h-[250px] h-[295px] xl:max-h-[225px]  xl:w-[43%] sm:w-[270px] lg:max-h-[200px]  lg:min-h-[200px]'>
        <article className=' w-[60%] h-[40%]  rounded-xl flex justify-center items-center flex-col gap-y-4'>
            <p className='font-bold bg-blue px-6 py-6 text-white lg:max-h-[68px] lg:max-w-[66px]' style={{borderRadius:"15px"}}>
                {item.svg}
                </p>
            <p className='text-center md:font-bold xl:font-semibold xl:text-[0.7rem]  lg:text-[0.7rem] text-[0.85rem]'>{item.title}</p>
        </article>
    </section>
)

})}
</div>

    )
}

const BoxesDataForAboutUs = [
    {
        id:1,
        title:"Secured Investment",
        svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
    },
    {
        id:2,
        title:"Tangible ROI",
        svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>

    },
    {
        id:3,
        title:"Speed Payout",
        svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>



    },
    {
        id:4,
        title:"24/7 Customer Care",
        svg:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.03565 15.9643C8.03565 14.5047 6.85241 13.3214 5.3928 13.3214C3.93319 13.3214 2.74994 14.5047 2.74994 15.9643V18.6071C2.74994 20.0667 3.93319 21.25 5.3928 21.25C6.85241 21.25 8.03565 20.0667 8.03565 18.6071V15.9643Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9643 18.6071C15.9643 20.0668 17.1476 21.25 18.6072 21.25C20.0668 21.25 21.2501 20.0668 21.2501 18.6071V15.9643C21.2501 14.5047 20.0668 13.3214 18.6072 13.3214C17.1476 13.3214 15.9643 14.5047 15.9643 15.9643V18.6071Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.2499 18.6071V12C21.2499 9.54675 20.2754 7.19397 18.5407 5.45926C16.806 3.72455 14.4532 2.75 11.9999 2.75C9.54669 2.75 7.19391 3.72455 5.4592 5.45926C3.72449 7.19397 2.74994 9.54675 2.74994 12V18.6071" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    },
]