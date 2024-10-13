import React, { useContext, useEffect, useState } from 'react'
import { DataControlContext } from '../Context/DataControlContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditAddress = () => {
    const {walletAddresses,setWalletAddresses} = useContext(DataControlContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const [editedFormObject,setEditedFormObject] = useState(
        {
        id:"",
        coinName:"",
        address:"" 
}
)
const findWallet = walletAddresses.find(item=> item.id === id)

    const postData = async (e) => {
        e.preventDefault()
     
if (!editedFormObject.coinName || !editedFormObject.address) {
    
    alert("empty box")
    return
}

    try {
    const response = await fetch("https://eskanor.com.ng/Api/Api/update_address.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        id:editedFormObject.id,
        coinName:editedFormObject.coinName,
        address:editedFormObject.address
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
console.log(editedFormObject);
setEditedFormObject({
    id:findWallet.id,
    coinName:findWallet.coin_name,
    address:findWallet.address 
})

  },[])


  return (
    <div>
       <div>
      <form onSubmit={postData} className='flex flex-col w-[400px] mx-auto pt-32 flex flex-col items-center'>
<label htmlFor="coinName" className='inline-block w-[80%] py-2'>Coin name</label>
<input 
className='border-black border-[1px] w-[80%] px-2 py-2'
type="text"
name='coinName'
id='coinName'
value={editedFormObject.coinName}
onChange={(e)=>{
setEditedFormObject({...editedFormObject,[e.target.name]:e.target.value})
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
value={editedFormObject.address}
onChange={(e)=>{
setEditedFormObject({...editedFormObject,[e.target.name]:e.target.value})
}}
/>

<button type='submit' className='bg-blue px-4 py-2 font-semibold rounded-lg mt-8 text-white'>edit </button>
      </form>
    </div>

    </div>
  )
}

export default EditAddress
