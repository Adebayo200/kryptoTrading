import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AddNewAddress = () => {
const [formObject,setFormObject] = useState({
coinName:"",
address:"" 
})

const navigate = useNavigate()
const postData = async (e) => {
    e.preventDefault()

    if (!formObject.address || !formObject.coinName) {
        alert("empty field")
        
    }
    try {
    const response = await fetch("https://eskanor.com.ng/Api/Api/create_address.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        coinName:formObject.coinName,
        address:formObject.address   
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

  },[formObject])

  return (
    <div>
      <form onSubmit={postData} className='flex flex-col w-[400px] mx-auto pt-32 flex flex-col items-center'>
<label htmlFor="coinName" className='inline-block w-[80%] py-2'>Coin name</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='coinName'
id='coinName'
value={formObject.coinName}
onChange={(e)=>{
setFormObject({...formObject,[e.target.name]:e.target.value})
}}
/>
<label htmlFor="address"
className='inline-block w-[80%] py-2'
>Address</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='address'
id='address'
value={formObject.address}
onChange={(e)=>{
setFormObject({...formObject,[e.target.name]:e.target.value})
}}
/>

<button type='submit' className='bg-blue px-4 py-2 font-semibold rounded-lg mt-8 text-white'>create </button>
      </form>
    </div>
  )
}

export default AddNewAddress
