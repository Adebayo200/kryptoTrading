import React from 'react'

const TopInvestors = () => {
  return (
    <div className='font-inter'>
       <section className='space-y-10'>
        <h1 className='text-center font-semibold' >WHAT OUR TOP INVESTORS SAY</h1>

        <InvestorsMapForMobile/>
       <Footer/>
       </section>
      
    </div>
  )
}

export default TopInvestors



const InvestorsMapForMobile = ()=>{



    return (
        <article className='px-8 space-y-8 sm:space-y-0 sm:flex sm:justify-between'>
            {investorsList.map((item,index)=>{

                return (
                    <aside key={item.id} className={`flex flex-col gap-y-6 sm:w-[45%] xl:w-[30%] sm:  ${index === 2 ? "sm:hidden xl:flex" : ""} `}>
                        <img src={item.imgPath} alt={item.name}  />
                       
                    <div className='text-[0.9rem] flex flex-col justify-between'  > 
                        <p>{item.paragraph}</p>
                        <h4 className='font-bold italic'>{item.name}</h4>
                    </div>
                    </aside>
                )
            })}
        </article>
    )
}




const Footer = ()=> {


    return  <footer className='px-8 my-4 flex  justify-between items-center  sm:px-48 xl:px-[25rem]'>
            <div className='flex flex-col items-center'>
                <span>
                    Investments
                </span>
                <span className='xs:text-[1.2rem]'>
                    200,000+
                </span>
            </div>
            <div  className='flex flex-col items-center'>
                <span>
                    Investors
                </span>
                <span className='xs:text-[1.2rem]'>
                    15000+
                </span>
            </div>
            <div  className='flex flex-col items-center'>
                <span>
                    Payouts
                </span>
                <span className='xs:text-[1.2rem]'>
                    $100m+
                </span>
            </div>
        </footer>
}









const investorsList = [
{
    id:1,
    imgPath:"/images/investor1.jpg",
    paragraph:"I've been investing with KrypToTrade for over a year, and the experience has been phenomenal. The platform is user-friendly, and the expert guidance has helped me grow my portfolio significantly. I appreciate the transparency and the peace of mind that comes with knowing my investments are secure.",
    name:"-Alex M. - Business man"
},
{
    id:2,
    imgPath:"/images/investor2.jpg",
    paragraph:"As a newcomer to cryptocurrency, I was initially hesitant, but KrypToTrade made the process so simple. The educational resources were incredibly helpful, and the customer support team was always there to answer my questions. I've gained confidence in my investment choices and seen steady returns.",
    name:"-Garry watkings - store owner"
},
{
    id:3,
    imgPath:"/images/investor3.jpg",
    paragraph:"KrypToTrade stands out from other platforms with its advanced tools and customizable investment plans. The platform's security features are top-notch, and the access to diverse crypto assets has allowed me to diversify my portfolio effectively. It's a game-changer for anyone serious about crypto investing.",
    name:"-Sarah higgins - stay at home mum"
},
]
