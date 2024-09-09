import React from 'react'

const WhyInvest = () => {
  return (
    <div className='font-poppins xl:flex flex-row-reverse'>
        {/* why invest in us section */}
        <section className='sm:my-20 xl:my-6'>
            <h1 className='my-8 xl:my-2 text-center text-[1.1rem] sm:text-[1.6rem] xl:font-semibold lg:text-[1.4rem]'>Why invest with Kryptotrade?</h1>
            <div className='my-8 px-4 sm:px-20 lg:px-10 xl:flex xl:flex-col xl:gap-y-4 lg:gap-y-2'>
{whyInfos.map((item,index)=>{


return (
    <article key={index} className='my-6 '>
<span className='font-semibold'>{item.id}.{item.title}</span>:{item.explanation}        
    </article>
)
})}
            </div>

        </section>

        {/* image and points */}
        <section className='mt-10 lg:w-[55%]'>
          
<img src="/images/rectangle-9.png" alt="rectangle" className='w-full h-[350px] sm:h-[608px]' />
          
<div className='mx-4 sm:mx-12 lg:mx-0 sm:flex  '>
{whyPoints.map((item,index)=>{

    return (
        <article key={index} className='w-[207px] h-[207px] flex flex-col justify-center items-center mx-auto border-[1px] border-[#cfcfcf] my-6 xl:mx-2 lg:mx-2 rounded-md space-y-4 lg:h-[170px] xl:max-h-[207px]'>
            <span className='font-bold'>{item.svg}</span>
            <span>{item.title}</span>
        </article>
    )
})}
</div>
        </section>
      
    </div>
  )
}

const whyInfos = [
    {
        id:1,
        title:"**Expert Guidance**",
        explanation:"Benefit from personalized strategies and insights from industry experts to maximize your investment potential."

    },
    {
        id:2,
        title:" **Robust Security**",
        explanation:"Your assets are safeguarded with top-tier encryption, multi-factor authentication, and cold storage solutions."

    },
    {
        id:3,
        title:"**User-Friendly Platform**",
        explanation:"Intuitive design and advanced tools make trading and managing your portfolio simple, even for beginners."

    },
    {
        id:4,
        title:"**Diverse Asset Selection**",
        explanation:"Access a wide range of cryptocurrencies, enabling you to diversify and capitalize on emerging opportunities."

    },
    {
        id:5,
        title:"**24/7 Support**",
        explanation:" Our dedicated customer support team is available around the clock to assist with any questions or concerns."

    },
]


const whyPoints = [
{
    id:1,
    title:"Detailed Progress",
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

},
{
    id:1,
    title:"Automated Bots",
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

},
{
    id:1,
    title:"24/7 support",
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

},
]


export default WhyInvest
