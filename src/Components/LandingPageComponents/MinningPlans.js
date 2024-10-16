import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { DataControlContext } from '../../Context/DataControlContext'

const MiningPlans = () => {
  const [minningData,setMinnningData] = useState([])
  const { minningData:dataForMinningPlans,setMinnningData:setDataForMinningPlans,loading} = useContext(DataControlContext)
  const navigate = useNavigate()

  const getMinningPlans =async ()=>{
const response = await fetch("https://eskanor.com.ng/Api/Api/minings.php")
const res = await response.json()
console.log(res);
if (res.status) {
    setMinnningData(res.data)
}
console.log("for minning");


  }

  useEffect(()=>{
setMinnningData(dataForMinningPlans)
  },[minningData,loading])
  return (
    <div className='font-poppins py-8'>
      <header className='space-y-8 my-10'>
        <h1 className='text-center font-semibold text-[1.2rem]  xl:text-[2rem] xl:font-normal md:text-[1.7rem]'>MINNING PLANS</h1>
        <p className='text-center px-8 xl:px-64 md:px-32 text-[0.8rem]'>KrypToTrade’s mining plans provide scalable solutions for everyone, from beginners to seasoned professionals, helping you fully maximize your crypto mining potential. Select the plan that aligns with your goals and start earning today.</p>
      </header>

    <article className='flex flex-col gap-y-8 md:flex-row md:flex-wrap'>
        {minningData?.map((item,index)=>{

            return (
        <div key={item.id}
        className='w-[80%] md:w-[40%] xl:w-[22%] mx-auto h-[550px]  border-[1px] border-yellow '>
        <section className='bg-yellow h-[50%] py-9 flex flex-col justify-evenly text-white items-center uppercase'>
        <span className='text-[1.6rem]'>{item.package}</span>
        <span className='text-[4rem]'>{item.percentage}%</span>
        <span className='text-[1.6rem]'>{item.returns}</span>
        </section>
        <section className='flex flex-col items-center h-[50%] justify-evenly py-2'>
        <aside className='flex flex-col text-yellow'>
        <span>Minumum Deposite ${item.min_dep}</span>
        <span>Maximum Deposite ${item.max_dep}</span>
        </aside>
        <Link  
        to={`/deposit/minning+${item.id}?=${item.package.toLocaleLowerCase()}`}
        className='text-center bg-yellow text-white w-[70%] py-4 rounded-lg text-[1.5rem]'>Deposit</Link  >
        </section>
        </div>
            )
        })}
    </article>
    </div>
  )
}



export default MiningPlans

const plansForMining = [
    {
        id:1,
        package:"basic",
        percentage:"20%",
        return:"ROI in 1 day",
        minDep:"$100",
        maxDep:"$500"
    },
    {
        id:2,
        package:"basic",
        percentage:"40%",
        return:"ROI in 5 days",
        minDep:"$500",
        maxDep:"$1000"
    },
    {
        id:3,
        package:"advanced",
        percentage:"50%",
        return:"ROI in 25 days",
        minDep:"$1500",
        maxDep:"$10,000"
    },
    {
        id:4,
        package:"pro",
        percentage:"100%",
        return:"ROI in 30 days",
        minDep:"$5000",
        maxDep:"$100,000"
    },
]