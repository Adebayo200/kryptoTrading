import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataControlContext } from '../Context/DataControlContext'




const EditPlans = () => {
    const navigate = useNavigate()
  const [amountToReturn,setAmountToReturn] = useState(0)
    const {id} = useParams()
const { allPlans,setAllPlans} = useContext(DataControlContext)
const getThePlan = allPlans.find(item => item.id == id )


useEffect(()=>{
console.log(getThePlan);
},[getThePlan])
const postData = async (e) => {
    e.preventDefault()
    if (!amountToReturn) {
        alert("empty field")
        return
    }

    console.log(amountToReturn);
    
    try {
    const response = await fetch("https://kryptotradingbackend.com.ng/Api/update_plan.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        id:getThePlan.id,
        userId:getThePlan.userId,
        userName:getThePlan.username,
        investmentType:getThePlan.investmentType,
        package:getThePlan.package,
        address:getThePlan.address,
        amount:getThePlan.amount,
        hash:getThePlan.hash,
        return:amountToReturn
    }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Success:', data);
navigate("/admincontrol")
} catch (error) {
    console.log('Error:', error);
    alert("something went wrong")
  }
  };
  return (
    <div>
<form action="" onSubmit={postData} className='flex flex-col w-[600px] mx-auto pt-32 flex flex-col items-center'>

    {/* name */}
    <div className='w-full'>
    <label htmlFor="username" className='inline-block w-[80%] py-2'>username</label>
<input type="text"
className='border-black border-[1px] w-[80%] px-2 py-2'
value={getThePlan.username}
readOnly
/>
</div>
{/* package */}
    <div  className='w-full'>
    <label htmlFor="username" className='inline-block w-[80%] py-2'>package</label>
<input type="text"
className='border-black border-[1px] w-[80%] px-2 py-2'
value={getThePlan.package}
readOnly
/>
</div>
{/* investment type */}
    <div  className='w-full'>
    <label htmlFor="username" className='inline-block w-[80%] py-2'>investmentType</label>
<input type="text"
className='border-black border-[1px] w-[80%] px-2 py-2'
value={getThePlan.investmentType}

readOnly
/>
</div >
{/* investment type */}
    <div  className='w-full'>
    <label htmlFor="username" className='inline-block w-[80%] py-2'>update return</label>
<input type="number"
onChange={(e)=> setAmountToReturn(e.target.value)}
className='border-black border-[1px] w-[80%] px-2 py-2'
value={amountToReturn}

/>
</div>
<div className='w-full flex items-center'>
    <button type='submit' className='bg-blue text-white px-2 py-2 rounded-md my-2'>Update</button>
</div>
</form>

    </div>
  )
}

export default EditPlans
