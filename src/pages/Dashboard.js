import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { IoHomeOutline } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import DataSpinner from '../Components/DataSpinner';
// delete plans
// https://kryptotradingbackend.com.ng/Api/delete_plans.php?id=3

// get all users plans
// https://kryptotradingbackend.com.ng/Api/user_plans.php?id=2



const Dashboard = () => {
       const navigate = useNavigate()
       const [loading,setLoading] = useState(true)
       const [userPlans,setUserPlans] = useState({})
      const {userActive,userInfo} = useContext(UserContext)
      const [userPlansData,setUserPlansData ] = useState([])
      const [balance,setBalance] = useState(0)

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
  console.log(res.data);
  
  if (res.status) {
    setUserPlansData(res.data)
    // return res.data
    
  }
  

 
} catch (error) {
  alert(error.message)
  alert("someting went,kinldy reload te webpage")
  return []
}

}
useEffect(()=>{
  // console.log(userInfo);
  fetchUserPlansData(userInfo.id)

},[])

useEffect(()=>{
console.log(userPlansData);
},[userPlansData])


useEffect(()=>{
  // console.log(userPlansData);
  const listss = [
    {
    amount :"3",
  },
    {
    amount :"4",
  },
    {
    amount :"5",
  },

]
  
const balanceToDisplay = userPlansData?.reduce((acc,curr)=>{

if (curr.amount) {
  const add  = Number(acc) + Number(curr.returns)
  return add
}
return acc
    },0)


    setBalance(balanceToDisplay)

    console.log(balanceToDisplay);
    
},[balance,userPlansData])


      useEffect(()=>{

// console.log(userInfo);
// console.log(userActive);
if (!userActive) {
    // navigate("/register")
    
}
console.log(userInfo);

      },[userActive,userInfo])
const handleSignOut = ()=>{
  window.location.reload()
localStorage.removeItem("myInfos")

}


  return (
    <div className="px-4 font-poppins pt-16">
    <h1 className=''>hello <span className='font-bold capitalize'>
      {userInfo.first_name}
      </span>
      </h1>

<div  className="background-image flex flex-col justify-center">
  <aside className="flex flex-col text-white text-md mx-4 md:text-lg">
    <span>Assets</span>
    <span>${balance.toFixed(2)} </span>
  </aside>
</div>


{/* action btns */}
<div className="flex justify-between my-10 md:px-4" >
  {actionBtn.map((btn,index)=>{
if (btn.route === "/signout" ) {
  return (
     (
      <aside className="flex flex-col items-center space-y-4">
        <div className="text-3xl" onClick={handleSignOut}>
          {btn.icon}
        </div>
        <p>{btn.name}</p>
      </aside>
    )
  )
}

    return (
      <aside className="flex flex-col items-center space-y-4 ">
        <div className="text-3xl " onClick={()=>{

          navigate(`${btn.route}`)
        }}>
          {btn.icon}
        </div>
        <p>{btn.name}</p>
      </aside>
    )
  })}
</div>


<CurrencyCrypto/>
    </div>
  )
}

export default Dashboard


const actionBtn = [
  {
    id:1,
    name:"Home",
    icon:<IoHomeOutline />,
    route:"/"
  },
  {
    id:2,
    name:"Deposit",
    icon:<GoArrowDownLeft />,
    route:"/plans"
  },
  {
    id:3,
    name:"Withdrawal",
    icon:<GoArrowUpRight />,
    route:"/withdrawal"
  },
  {
    id:4,
    name:"sign out",
    icon:<GoSignOut />,
    route:"/signout"
  },
]

const CurrencyCrypto= ()=>{



  return (
<div className="space-y-8">


<article className="border-[1px] border-gray rounded-sm px-2 py-4 md:py-6 font-poppins">

  {/* BTC */}
  <aside className="flex justify-between items-start border-b-[1px] border-gray">
  <span>BTC</span>
  <span>0.00</span>
  </aside>

  {/* USD */}
  <aside className="flex justify-between">
  <span>USD</span>
  <span className="text-blue">$0.00</span>
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
  <span className="text-blue">$0.00</span>
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
  <span className="text-blue">$0.00</span>
  </aside>
</article>
</div>

  )
}








