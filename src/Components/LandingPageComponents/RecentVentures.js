import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";

const RecentVentures = () => {
  return (
    <div className='px-4 font-poppins mb-32'>
      <h1 className='text-center font-semibold text-lg'>Our Recent Ventures</h1>

      <p className=' xl:w-[70%] mx-auto text-center'>We’ve revitalized struggling businesses and assisted leading companies in boosting their revenue over time. Here are some of our most successful services.</p>



    <article className='flex flex-col items-center xl:flex-row xl:justify-between lg:h-[650px] lg:my-16'>
{ventures.map((item,index)=>{


return <div className='w-[85%] xl:w-[30%] my-4 shadow-lg lg:h-[85%]'>
    <img src={item.img} alt={item.heading} />
    <aside>
        <h1 className='font-normal text-lg mt-6 px-2' >{item.heading}</h1>
        <div className='flex gap-x-6'>
            <span className='flex items-center px-2 py-4 text-[0.8rem'><FaRegUser className='text-blue text-lg'/> {item.type}</span>
            <span className='flex items-center px-2 py-4 text-[0.8rem]'><IoCalendarOutline className='text-blue text-lg' /> {item.date}</span> 
        </div>
    </aside>
    <p className='border-t-[1px] border-black py-4 text-xs text-justify px-2 xl:text-md'>{item.desc}</p>
</div>
})}
    </article>
    </div>
  )
}

const ventures = [
    {
        id:1,
        img:"images/first-ventures.jpg",
        heading:"BUSINESS GROWTH",
        type:"company",
        date:"15 march 2020",
        desc:"KrypToTrade recently helped a business achieve substantial growth by providing expert investment strategies, enabling them to diversify and expand their market reach. Our commitment to client success drives impressive results."
    },
    {
        id:2,
        img:"images/second-ventures.jpg", 
        heading:"TECH STARTUP INVESTMENT",
        type:"company",
        date:"29 DECEMBER 2023",
        desc:" We played a key role in helping a tech startup secure vital funding, allowing them to scale operations and enter new markets."
    },
    {
        id:3,
        img:"images/third-ventures.jpg",
        heading:"FINANCE PLANNING",
        type:"company",
        date:"15 march 2020",
        desc:"KrypToTrade successfully partnered with a prominent fashion brand, providing strategic investment guidance that enabled the company to diversify its business offerings. Through our tailored approach, we helped them explore new markets and revenue streams, resulting in a significant increase in their customer base and overall business growth."
    },
]


export default RecentVentures
