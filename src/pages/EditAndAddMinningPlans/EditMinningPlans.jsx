import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataControlContext } from '../../Context/DataControlContext'

const EditMinningPlans = () => {
    const [formObject,setFormObject] = useState({
        id:"",
        package:"",
        percentage:"",
        return:"",
        minDep:"",
        maxDep:""
    })
    const {id} = useParams()
    const {minningData,setMinnningData} = useContext(DataControlContext)
 
const findMinningPlans = minningData.find(item=> item.id == id)
// useEffect(()=>{
//   console.log("mData",minningData);
  
//   console.log("findMdata",findMinningPlans);
//   console.log("Id",id);
  
// },[])


const navigate = useNavigate()

const postData = async (e) => {
    e.preventDefault()
    if (!formObject.package || !formObject.percentage || !formObject.return || !formObject.minDep || !formObject.maxDep) {
        alert("empty field")
        return
    }
    try {
    const response = await fetch("https://kryptotradingbackend.com.ng/Api/update_mining.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
    id:formObject.id,
    package:formObject.package,
    percentage:formObject.percentage,
    return:formObject.return,
    minDep:formObject.minDep,
    maxDep:formObject.maxDep
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
  }
  };

useEffect(()=>{
console.log(formObject);
setFormObject({
    id:findMinningPlans.id,
    package:findMinningPlans.package,
    percentage:findMinningPlans.percentage,
    return:findMinningPlans.returns,
    minDep:findMinningPlans.min_dep,
    maxDep:findMinningPlans.max_dep
})

},[])

  return (
   <div>
      <form onSubmit={postData} className='flex flex-col w-[400px] mx-auto pt-32 flex flex-col items-center'>
        <>
<label htmlFor="package" className='inline-block w-[80%] py-2'>Package</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='package'
id='package'
value={formObject.package}
onChange={(e)=>{
    setFormObject({...formObject,[e.target.name]:e.target.value})
}}
/>
</>


<>
<label htmlFor="percentage"
className='inline-block w-[80%] py-2'
>percentage</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='percentage'
id='percentage'
value={formObject.percentage}
onChange={(e)=>{
setFormObject({...formObject,[e.target.name]:e.target.value})
}}
/>
</>

<>
<label htmlFor="return"
className='inline-block w-[80%] py-2'
>return</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='return'
id='return'
value={formObject.return}
onChange={(e)=>{
setFormObject({...formObject,[e.target.name]:e.target.value})
}}
/>
</>

<>
<label htmlFor="minDep"
className='inline-block w-[80%] py-2'
>Minimum Deposit</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='minDep'
id='minDep'
value={formObject.minDep}
onChange={(e)=>{
setFormObject({...formObject,[e.target.name]:e.target.value})
}}
/>
</>
<>
<label htmlFor="maxDep"
className='inline-block w-[80%] py-2'
>Maximum Deppsit</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='maxDep'
id='maxDep'
value={formObject.maxDep}
onChange={(e)=>{
setFormObject({...formObject,[e.target.name]:e.target.value})
}}
/>
</>

<button type='submit' className='bg-blue px-4 py-2 font-semibold rounded-lg mt-8 text-white'>Edit </button>
      </form>
    </div>
  )
}

export default EditMinningPlans
