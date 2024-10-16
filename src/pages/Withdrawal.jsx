import React, { useContext, useEffect, useState } from 'react'
import { DataControlContext } from '../Context/DataControlContext'
import WithdrawalModal from '../Components/Modals/WithdrawalModel'

const Withdrawal = () => {
    const {withdrawalModal,setWithdrawalModal} = useContext(DataControlContext)
    const [withdrawalDetails,setWithdrawalDetails] = useState({
      userAddress:"",
      amount:""
    })
    const [withdrawalLoading,setWithdrawalLoading] = useState(false)
    const [loading,setLoading] = useState(false)
    const [timer,setTimer] = useState(0)
    

    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log("clicked");
      
if (!withdrawalDetails.amount || !withdrawalDetails.userAddress) {
  alert("empty field")
  return
}
setLoading(true)


    }
    useEffect(()=>{
   if (!loading) {
    return
   }   
      
if (timer == 2) {
  setLoading(false)
  setWithdrawalModal(true)
  setTimer(0)
  return
}
const timeCount = setInterval(()=>{
  setTimer(prev => prev + 1)
},1000) 

console.log(timer);


return ()=> clearTimeout(timeCount)

    },[loading,timer])

useEffect(()=>{
console.log(withdrawalDetails);

},[withdrawalDetails])

  return (
  <article className ="px-4 font-poppins my-16">
    {withdrawalModal && <WithdrawalModal withdrawalAmount={withdrawalDetails.amount} />}
    <p className='text-lg font-medium my-8'>Choose a Withdrawal method</p>
    <div className="space-y-8  text-sm">
<article className="border-[1px] border-gray rounded-sm px-2 py-4 md:py-6 font-poppins">

  {/* BTC */}
  <aside className="flex justify-between items-start border-b-[1px] border-gray">
  <span>BTC</span>
  <span>0.00</span>
  </aside>

  {/* USD */}
  <aside className="flex justify-between">
  <span>USD</span>
  <span className="text-[red]">$0.00</span>
  </aside>
</article>
<article className="border-[1px] border-gray rounded-sm px-2 py-4 md:py-6 font-poppins">

  {/* BTC */}
  <aside className="flex justify-between items-start border-b-[1px] border-gray">
  <span>BTC</span>
  <span>0.00</span>
  </aside>

  {/* USD */}
  <aside className="flex justify-between">
  <span>USDT</span>
  <span className="text-[red]">$0.00</span>
  </aside>
</article>
<article className="border-[1px] border-gray rounded-sm px-2 md:py-6 py-4 font-poppins">

  {/* BTC */}
  <aside className="flex justify-between items-start border-b-[1px] border-gray">
  <span>ETHERIUM</span>
  <span>0.00</span>
  </aside>

  {/* USD */}
  <aside className="flex justify-between">
  <span>USD</span>
  <span className="text-[red]">$0.00</span>
  </aside>
</article>
</div>


{/* form */}

<form action="" onSubmit={handleSubmit} className='space-y-10 my-10 text-sm '>
    <div>
    <label htmlFor="" className='my-2 block'>Enter your wallet address</label>
    <input type="text"
     value={withdrawalDetails.userAddress}
     onChange={(e)=> setWithdrawalDetails({...withdrawalDetails,userAddress:e.target.value})} 
     className='h-16 border-[2px] border-gray w-full px-2 md:w-[616px] xl:w-[773px]'
     />
    <p className='text-sm text-[red] mt-2'> paste only preferred wallet available in your assets</p>
    </div>

    <div>
    <label htmlFor="" className='my-2 block'>Enter amount</label>
    <input type="text"
    value={withdrawalDetails.amount}
    onChange={(e)=> setWithdrawalDetails({...withdrawalDetails,amount:e.target.value})} 
     className='h-16 border-[2px] border-gray w-full px-2  md:w-[509px]  xl:w-[773px] '
    />
    </div>
<div className='flex flex-col items-center md:items-start'>
    <button type='submit' className='bg-blue text-white w-[147px] h-[47px] flex items-center justify-center'>
       {loading ? <img src="/images/white-spinner.svg" alt="spinner" className='w-[30px] h-[30px]' />  : "withdraw"}
    </button>
</div>
</form>
  </article>
  )
}

export default Withdrawal
