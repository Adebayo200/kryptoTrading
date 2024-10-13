import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataControlContext } from '../Context/DataControlContext'


const AdminControl = () => {
    const [users,setUsers] = useState([])
    const [minningPlans,setMinningPlans] = useState([])
    const [investmentPlans,setInvestmentPlans] = useState([])
    const [wallets,setWallets] = useState([])
    const [section,setSection] = useState("users")

    const {   walletAddresses,
    setWalletAddresses,
    minningData,
    setMinnningData,
    investmentData,
    setInvestmestData} = useContext(DataControlContext)

    // GET USERS DATA

    const fetchUsers = async()=>{
    const response  = await fetch("https://eskanor.com.ng/Api/Api/users.php")
    const res = await response.json()
    console.log(res);
    if (res.status) {
    setUsers(res.data)
    }
    // console.log("users from admin");
    }


    // GET MINNING PLANS DATA
    // const getMinningPlans =async ()=>{
    // const response = await fetch("https://eskanor.com.ng/Api/Api/minings.php")
    // const res = await response.json()
    // console.log(res);
    // if (res.status) {
    // setMinningPlans(res.data)
   


    // }
    // // console.log("for minning");


    // }

    // INVESTMENT PLANS DATA

//  const fetchInvestmentPlans = async()=>{
// const response = await fetch("https://eskanor.com.ng/Api/Api/investments.php")
// const res = await response.json()
// if (res.status) {
//  setInvestmentPlans(res.data)
//  console.log(res.data);
 
//   return
// }
// // console.log(data);

//   }

// const getDepositAddresses = async()=>{
//   const response  = await fetch("https://eskanor.com.ng/Api/Api/addresses.php")
//   const res  = await response.json()
//   if (res.status) {
//     setWallets(res.data)
//     console.log(res.data);
    
//     return
//   }
//   console.log(res);
//   } 


const changeSection = (menu)=>{
setSection(menu)
}

    useEffect(()=>{
    fetchUsers()
    // getMinningPlans()
    // fetchInvestmentPlans()
    //  getDepositAddresses()
    },[])
  return (
    <div className='flex'>
     <aside className='w-[10%] bg-blue h-screen flex flex-col'>
        <span className={`py-2 text-center w-full cursor-pointer ${section === "users" ? "bg-gray" : "" }`} onClick={()=> changeSection("users")}>Users</span>
        <span  className={`py-2 text-center w-full cursor-pointer ${section === "wallets" ? "bg-gray" : "" }`} onClick={()=> changeSection("wallets")}>Wallets</span>
        <span  className={`py-2 text-center w-full cursor-pointer ${section === "minningplans" ? "bg-gray" : "" }`} onClick={()=> changeSection("minningplans")}>Minning Plans</span>
        <span className={`py-2 text-center w-full cursor-pointer ${section === "investmentplans" ? "bg-gray" : "" }`} onClick={()=> changeSection("investmentplans")}>Investment Plans</span>
     </aside>

     <article className='w-[90%]'>
{section === "users" ? <Users users={users}/> : section === "wallets" ? <Wallets wallets={walletAddresses}/> : section === "minningplans" ? <MinningPlans minningPlans={minningData}/> : <InvestmentPlans investmentPlans={investmentData} /> }
     </article>
    </div>
  )
}







const Users = ({users})=>{


    return (

        
        <div>
            <h1 className='text-center py-6 font-bold'>Users</h1>
<header className='flex justify-between'> 
    <span className='w-[20%] text-center'>username</span>
    <span className='w-[20%] text-center'>email</span>
    <span className='w-[20%] text-center'>firstname</span>
    <span className='w-[20%] text-center'>lastname</span>
    {/* <span>No. of plans</span> */}
    <span className='w-[20%] text-center'>Date</span>
</header>
<article>
  {users?.map((user,index)=>{
return (
    <div key={user.id} className='flex justify-between'>
        <span className='w-[20%] text-center '>{user.username}</span>
        <span className='w-[20%] text-center'>{user.email}</span>
        <span className='w-[20%] text-center'>{user.first_name}</span>
        <span className='w-[20%] text-center'>{user.last_name}</span>
        <span className='w-[20%] text-center'>{user.created_at}</span>
    </div>
)

  })}
</article>
        </div>
    )
}



const Wallets = ({wallets})=>{
    const navigate = useNavigate()

return (
    
<div>
    <nav className='flex justify-between px-8 py-8'>
    <h1 className='text-center font-bold'>wallets</h1>
    <button className='bg-blue px-4 font-bold text-lg rounded-lg text-white'
    onClick={()=> navigate("/addnewaddress")}
    >+</button>
    </nav>
<div>

     <header className='flex justify-between'>
                <span className='w-[40%] text-start' >Crypto name</span>
                <span className='w-[40%] text-start'>Deposit address</span>
                <span className='w-[20%] text-start'>Action</span>
            </header>
            <article>
                {wallets?.map((w,index)=>{
return (
    <div key={w.id} className='flex justify-between'>
        <span className='w-[40%] text-start'>{w.coin_name}</span>
        <span className='w-[40%] text-start'>{w.address}</span>
        <div className='w-[20%] flex justify-between '>
            <span onClick={()=> navigate(`/editaddress/${w.id}`)} className='cursor-pointer' >edit</span>
            <span className='cursor-pointer' 
            onClick={async()=>{
   
   const del  =await fetch(`https://eskanor.com.ng/Api/Api/delete_address.php?id=${w.id}`)
   if (del.ok) {
     navigate(0);
     return
   }

   if (!del.ok) {
    console.log(del)
    alert("there was an error")
   }

            }}>delete</span>

        </div>
    </div>
)

                })}
            </article>
</div>
</div>
)
}


const InvestmentPlans = ({investmentPlans})=>{
const navigate  = useNavigate()
   
       return (
        <div>

    <nav className='flex justify-between px-8 py-8'>
    <h1 className='text-center font-bold'>Mining Plans </h1>
    <button className='bg-blue px-4 font-bold text-lg rounded-lg text-white'
    onClick={()=> navigate("/addnewinvestmentplan")}
    >+</button>
    </nav>
            <header className='flex justify-between'>
                <span className='w-[15%] text-center '>Package</span>
                <span className='w-[15%] text-center '>returns</span>
                <span className='w-[15%] text-center '>minimum deposit</span>
                <span className='w-[15%] text-center '>maximum deposit</span>
                <span className='w-[15%] text-center '>percentage</span>
                <span className='w-[25%] text-center '>Action Buttons</span>
            </header>
<div>
    {investmentPlans?.map((plan,index)=>{


return (
    <div  className='flex justify-between' key={plan.id}>
        <span className='w-[15%] text-center '>{plan.package}</span>
        <span className='w-[15%] text-center '>{plan.returns}</span>
        <span className='w-[15%] text-center '>{plan.min_dep}</span>
        <span className='w-[15%] text-center '>{plan.max_dep}</span>
        <span className='w-[15%] text-center '>{plan.percentage}</span>
        <div className='w-[20%] flex justify-evenly'>
            <span 
            
            className='cursor-pointer' 
            onClick={()=> navigate(`/editinvestmentplans/${plan.id}`)} >edit</span>
            <span className='cursor-pointer'
               onClick={async()=>{

   const del  =await fetch(` https://eskanor.com.ng/Api/Api/delete_investment.php?id=${plan.id}`)
   if (del.ok) {
     navigate(0);
     return
   }

   if (!del.ok) {
    console.log(del)
    alert("there was an error")
   }

            }}
            >delete</span>
        </div>
    </div>
)
    })}
</div>
        </div>
    )
    
}


const MinningPlans = ({minningPlans})=>{
const navigate  = useNavigate()

    return (
        <div>

    <nav className='flex justify-between px-8 py-8'>
    <h1 className='text-center font-bold'>Mining Plans </h1>
    <button className='bg-blue px-4 font-bold text-lg rounded-lg text-white'
    onClick={()=> navigate("/addnewminingplan")}
    >+</button>
    </nav>
            <header className='flex justify-between'>
                <span className='w-[15%] text-center '>Package</span>
                <span className='w-[15%] text-center '>returns</span>
                <span className='w-[15%] text-center '>minimum deposit</span>
                <span className='w-[15%] text-center '>maximum deposit</span>
                <span className='w-[15%] text-center '>percentage</span>
                <span className='w-[25%] text-center '>Action Buttons</span>
            </header>
<div>
    {minningPlans.map((plan,index)=>{


return (
    <div  className='flex justify-between' key={plan.id}>
        <span className='w-[15%] text-center '>{plan.package}</span>
        <span className='w-[15%] text-center '>{plan.returns}</span>
        <span className='w-[15%] text-center '>{plan.min_dep}</span>
        <span className='w-[15%] text-center '>{plan.max_dep}</span>
        <span className='w-[15%] text-center '>{plan.percentage}</span>
        <div className='w-[20%] flex justify-evenly'>
            <span className='cursor-pointer'
             onClick={()=> navigate(`/editminingplans/${plan.id}`)} >edit</span>
            <span 
        className='cursor-pointer' 
        onClick={async()=>{
        try {
        const del  = await fetch(`https://eskanor.com.ng/Api/Api/delete_mining.php?id=${plan.id}`)
        if (del.ok) {
        navigate(0);
        return
        }
        else if (!del.ok) {
        alert("an error occured")
        }
        } catch (error) {
        console.log(error.message);
        alert("an error occured")
        }

        // https://eskanor.com.ng/Api/Api/delete_mining.php?id=5

        }}
            >delete</span>
        </div>
    </div>
)
    })}
</div>
        </div>
    )
}

export default AdminControl


    
