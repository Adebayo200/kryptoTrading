import React from 'react'

const OurMetrics = () => {
  return (
    <div className='font-poppins'>
        {/* metirc status */}
      <section>
        {/* status */}
        <article className='xl:flex xl:justify-between '>
        <div className='space-y-6 xl:w-[60%]'>
        <h1 className='w-[90%] mx-auto text-center text-[1.3rem] my-10 xl:text-start xl:text-[1.6rem] uppercase'>Our Metrics</h1>

     {metricProgress.map((item,index)=>{

        return (
              <aside className='w-[90%] mx-auto ' key={item.id}>
        <div className='text-[1.1rem]'>{item.name}</div>
        <div className='bg-gray w-full rounded-tr-full rounded-br-full h-[25px]'>
            <div className={`bg-blue h-full rounded-tr-full rounded-br-full flex justify-end items-center px-2`} style={{width:item.percentage}}>
                <span className='text-white text-[1.2rem]'>{item.percentage}</span>
            </div>
        </div>
       </aside>
        )
     })}
        </div>
       {/* images */}
       <div className='space-y-4 my-6 xl:my-0 mt-10  xl:w-[40%] xl:flex xl:flex-col  xl:justify-end xl:min-h-full'> 
<img src="/images/metric1.jpg" alt="metric" className='w-[90%] h-[115px] mx-auto rounded-3xl object-cover xl:h-[130px] md:h-[200px]' />
<aside className='flex justify-between w-[90%] mx-auto'>
<img src="/images/metric2.jpg" alt="metric" className='w-[45%] h-[90px] rounded-3xl object-cover xl:h-[130px]  md:h-[200px]'/>
<img src="/images/metric3.jpg" alt="metric" className='w-[45%] h-[90px]  rounded-3xl xl:h-[130px]  md:h-[200px] object-cover'/>
</aside>
       </div>
        </article>
      </section>
{/* second section */}
      <section className='my-10'>
<p className='w-[90%] xl:w-[95%] mx-auto text-[0.85rem]'>
    KrypToTrade has seen significant advancements over the past year, positioning itself as a leader in the cryptocurrency space. We've successfully launched new investment and mining plans tailored to meet diverse investor needs, attracting a growing user base. Our platform's security has been bolstered with cutting-edge technologies, ensuring the safety and trust of our clients.
<br />
<br />
<br />
Additionally, we've expanded our educational resources and customer support, empowering users to make informed decisions with confidence. Our commitment to innovation and client satisfaction has not only driven our success but has also set the stage for future growth and industry leadership. As we look ahead, we remain dedicated to providing exceptional service and pioneering new solutions in the world of digital assets.
</p>
      </section>
    </div>
  )
}

export default OurMetrics


const metricProgress = [
    {
        id:1,
        name:"Strategy and analysis",
        percentage:"90%",
    },
    {
        id:2,
        name:"Economic progress",
        percentage:"86%",
    },
    {
        id:3,
        name:"Achieved Goals",
        percentage:"90%",
    },
]