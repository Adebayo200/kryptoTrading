import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatWeDo = () => {
  return (
    <div className='px-8'>
        <header className='space-y-8 mb-10'>
            <h1 className='text-center font-semibold'>WHAT WE DO</h1>
            <p className='text-center'>we give the best services</p>
        </header>

      <PointsForMobile/>
      <PointsForTablet/>     
    </div>
  )
}



const PointsForMobile = ()=>{


    return (
        
        <div className='mx-auto space-y-6 my-4 sm:hidden'>
{whatWeDoImages.map((image)=>{

return(
    <div key={image.id} className=''>
        <img src={image.link} alt={image.alt} />
    </div>
)

})}
        </div>
    )
}
const PointsForTablet = ()=>{
 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     centerMode: true,
  };

    return (
        
        <div className='mx-auto hidden sm:block space-y-6 my-4'>
             <Slider {...settings} className='space-x-4 mx-[10px]'>
{whatWeDoImages.map((image,index)=>{
    
    return(
      <div className='' key={index}>
        <img src={image.link} alt={image.alt} className='' />
      </div>
    
 
)

})}
</Slider>
     </div>
    )
}



const whatWeDoImages = [
{
    id:1,
    alt:"group one",
    link:"/images/Group-one.jpg"
},
{
    id:2,
    alt:"group two",
    link:"/images/Group-two.jpg"
},
{
    id:3,
    alt:"group four",
    link:"/images/Group-three.jpg"
},
{
    id:4,
    alt:"group four",
    link:"/images/Group-four.jpg"
},
{
    id:5,
    alt:"group five",
    link:"/images/Group-five.png"
},
]

export default WhatWeDo
