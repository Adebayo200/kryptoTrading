import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DataControlContext } from '../../Context/DataControlContext'

const InvestmentPlans = () => {
  const [investmentData,setInvestmestData] = useState([])
  const { investmentData:dataForInvestmentsPlans, setInvestmestData:setDataForInvestmentPlans,loading,height,setHeight,planstDiv} = useContext(DataControlContext)
  const plans = useRef(null)
  
  const navigate =  useNavigate()

  const fetchInvestmentPlans = async()=>{
const response = await fetch("https://kryptotradingbackend.com.ng/Api/investments.php")
const res = await response.json()
if (res.status) {
  setInvestmestData(res.data)
  return
}
// console.log(data);

  }

useEffect(()=>{
setInvestmestData(dataForInvestmentsPlans)
// console.log(dataForInvestmentsPlans);


},[investmentData,loading])


  return (
    <div className='font-poppins py-8' ref={planstDiv} >
      <header className='space-y-8 my-10'>
        <h1 className='text-center font-semibold text-[1.2rem]  xl:text-[2rem] xl:font-normal md:text-[1.7rem]'>INVESTMENT PLANS</h1>
        <p className='text-center px-8 xl:px-64 md:px-32 text-[0.8rem]'>The rates we offer are truly exceptional, and we go above and beyond to ensure your plans are flawlessly executed, providing you with enticing benefits and impressive returns.</p>
      </header>

    <article className='flex flex-col gap-y-8 md:flex-row md:flex-wrap'>
        {investmentData?.map((item,index)=>{

            return (
        <div key={item.id}
        className='w-[80%] md:w-[40%] xl:w-[22%] mx-auto h-[550px]  border-[1px] border-blue cursor-pointer'>
        <section className='bg-blue h-[50%] py-9 flex flex-col justify-evenly text-white items-center uppercase'>
        <span className='text-[1.6rem]'>{item.package}</span>
        <span className='text-[4rem]'>{item.percentage}%</span>
        <span className='text-[1.6rem]'>{item.returns}</span>
        </section>
        <section className='flex flex-col items-center h-[50%] justify-evenly py-2'>
        <aside className='flex flex-col text-blue'>
        <span>Minumum Deposite ${item.min_dep}</span>
        <span>Maximum Deposite ${item.max_dep}</span>
        </aside>
        <Link to={`/deposit/investment+${item.id}?=${item.package.toLocaleLowerCase()}`} className='bg-blue text-center text-white w-[70%] py-4 rounded-lg text-[1.5rem]'>Deposit</Link>
        </section>
        </div>
            )
        })}
    </article>
    </div>
  )
}



export default InvestmentPlans

const investmentPlans = [
    {
        id:1,
        package:"STARTER",
        percentage:"20%",
        return:"ROI in 1 day",
        minDep:"$100",
        maxDep:"$500"
    },
    {
        id:2,
        package:"Growth",
        percentage:"40%",
        return:"ROI in 5 days",
        minDep:"$500",
        maxDep:"$1000"
    },
    {
        id:3,
        package:"premium",
        percentage:"50%",
        return:"ROI in 25 daya",
        minDep:"$1500",
        maxDep:"$10,000"
    },
    {
        id:4,
        package:"wealth",
        percentage:"100%",
        return:"ROI in 30 days",
        minDep:"$5000",
        maxDep:"$100,000"
    },
]