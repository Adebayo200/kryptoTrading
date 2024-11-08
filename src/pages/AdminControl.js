import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataControlContext } from '../Context/DataControlContext'


const AdminControl = () => {
    const [users,setUsers] = useState([])
    const [minningPlans,setMinningPlans] = useState([])
    const [investmentPlans,setInvestmentPlans] = useState([])
    const [wallets,setWallets] = useState([])
    const [section,setSection] = useState("users")
    const [allPlans,setAllPlans] = useState([])

    const {   walletAddresses,
    setWalletAddresses,
    minningData,
    setMinnningData,
    investmentData,
    setInvestmestData} = useContext(DataControlContext)

    // GET USERS DATA

    const fetchUsers = async()=>{
    const response  = await fetch("https://kryptotradingbackend.com.ng/Api/users.php")
    const res = await response.json()
    console.log(res);
    if (res.status) {
    setUsers(res.data)
    }
    // console.log("users from admin");
    }

    const fetchAllPlans = async()=>{
    const response  = await fetch("https://kryptotradingbackend.com.ng/Api/plans.php")
    const res = await response.json()
    console.log(res);
    if (res.status) {
    setAllPlans(res.data)
    }
    // console.log("users from admin");
    }


    // GET MINNING PLANS DATA
    // const getMinningPlans =async ()=>{
    // const response = await fetch("https://kryptotradingbackend.com.ng/Api/minings.php")
    // const res = await response.json()
    // console.log(res);
    // if (res.status) {
    // setMinningPlans(res.data)
   


    // }
    // // console.log("for minning");


    // }

    // INVESTMENT PLANS DATA

//  const fetchInvestmentPlans = async()=>{
// const response = await fetch("https://kryptotradingbackend.com.ng/Api/investments.php")
// const res = await response.json()
// if (res.status) {
//  setInvestmentPlans(res.data)
//  console.log(res.data);
 
//   return
// }
// // console.log(data);

//   }

// const getDepositAddresses = async()=>{
//   const response  = await fetch("https://kryptotradingbackend.com.ng/Api/addresses.php")
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
    fetchAllPlans()
    // getMinningPlans()
    // fetchInvestmentPlans()
    //  getDepositAddresses()
    },[])
  return (
    <div className='flex m-h-screen'>
     <aside className='w-[10%] bg-blue h-[100vh] flex flex-col'>
        <span className={`py-2 text-center w-full cursor-pointer ${section === "users" ? "bg-gray" : "" }`} onClick={()=> changeSection("users")}>Users</span>
        <span  className={`py-2 text-center w-full cursor-pointer ${section === "wallets" ? "bg-gray" : "" }`} onClick={()=> changeSection("wallets")}>Wallets</span>
        <span  className={`py-2 text-center w-full cursor-pointer ${section === "minningplans" ? "bg-gray" : "" }`} onClick={()=> changeSection("minningplans")}>Minning Plans</span>
        <span className={`py-2 text-center w-full cursor-pointer ${section === "investmentplans" ? "bg-gray" : "" }`} onClick={()=> changeSection("investmentplans")}>Investment Plans</span>
        <span className={`py-2 text-center w-full cursor-pointer ${section === "allplans" ? "bg-gray" : "" }`} onClick={()=> changeSection("allplans")}>All Plans</span>
     </aside>

     <article className='w-[90%]'>
{section === "users" ? <Users users={users}/> : section === "wallets" ? <Wallets wallets={walletAddresses}/> : section === "minningplans" ? <MinningPlans minningPlans={minningData}/> : section === "investmentplans" ? <InvestmentPlans investmentPlans={investmentData} /> : <AllPlans allPlans={allPlans} /> }
     </article>
    </div>
  )
}







const Users = ({users})=>{
const [userPlansData,setUserPlansData] = useState([]) 

const fetchUserPlansData = async(id)=>{
  if (!id) {
    return
  }
try {
    const response = await fetch("https://kryptotradingbackend.com.ng/Api/user_plans.php?id="+ id )
  if (!response.ok) {
    alert("something went wrong,kindly roload the page")
  }
  const res = await response.json()
//   console.log(res.data);
  
  if (res.status) {
    console.log(res.data.length < 1);
    if (res.data.length < 1) {
        alert("user currently doesnt have any plan")
    }
    setUserPlansData(res.data)
    // return res.data
    
  }
  

 
} catch (error) {
  alert(error.message)
  alert("someting went,kinldy reload te webpage")
  return []
}

}


    
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
   
   const del  =await fetch(`https://kryptotradingbackend.com.ng/Api/delete_address.php?id=${w.id}`)
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

   const del  =await fetch(`https://kryptotradingbackend.com.ng/Api/delete_investment.php?id=${plan.id}`)
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
        const del  = await fetch(`https://kryptotradingbackend.com.ng/Api/delete_mining.php?id=${plan.id}`)
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

        // https://kryptotradingbackend.com.ng/Api/delete_mining.php?id=5

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



const AllPlans = ({allPlans})=>{

const navigate  = useNavigate()
    return (
        <div>
            <h1 className='text-center py-6 font-bold'>Users</h1>

            <article>
<header className='flex justify-between '>
    <span className=''>usernames</span>
    <span>investment type</span>
    <span>package</span>
    <span>amount</span>
    <div className='w-[15%] text-center '>
    <span>Action</span>
    </div>
</header>
<div>
{allPlans.map((plans,index)=>{

    return (
            <aside className='flex justify-between my-2'>
    <span>{plans.username}</span>
    <span>{plans.investmentType}</span>
    <span>{plans.package}</span>
    <span>{plans.amount}</span>
    <div className='w-[15%] flex justify-evenly '>

    <span className='cursor-pointer  bg-[red] px-2 py-[2px] rounded-md ' onClick={async()=> {
        
        const response = await fetch("https://kryptotradingbackend.com.ng/Api/delete_plan.php?id="+ plans.id)
        if (response.ok) {
            window.location.reload()
        }
        console.log(response.ok);
        
    }}>Delete</span>
    <span
    className='bg-blue px-2 py-[2px] rounded-md cursor-pointer'
    onClick={()=> {
        // console.log(plans);
        
        navigate("/updatePlan/"+plans.id)
    
    }
    
    }
    >update</span>
    </div>
</aside>
    )
})}

</div>

            </article>

        </div>
    )
}

export default AdminControl


    
