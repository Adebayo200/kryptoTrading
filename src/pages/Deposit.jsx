import { useContext, useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { DataControlContext } from "../Context/DataControlContext";
import { UserContext } from "../Context/UserContext";
import DepositModal from "../Components/Modals/DepositModal";

const Deposit = ()=>{



  const {walletAddresses,setWalletAddresses,investmentData:dataForInvestmentsPlans,minningData:dataForMinningPlans, depositModal,setDepositModal} = useContext(DataControlContext)
  const [depositLoading,setDepositLoading] = useState(false)
  const {userActive,userInfo} = useContext(UserContext)
  const [chosenPlan,setChosenPlan] = useState({
      id:"",
      max_dep: "",
      min_dep: "",
      package: "",
      percentage: "",
      returns: ""
  })

 
  const [depositDetails,setDepositDetails] = useState(
    {
        userId:null,
        username:null,
        investmentType:null,
        package:null,
        address:null,
        amount:undefined,
        hash:undefined
    }
  )
  const { id } = useParams();




  const postData = async (e) => {
    e.preventDefault()
    
    
    if (!userInfo.id || !userInfo.username || !depositDetails.amount || !depositDetails.hash || !depositDetails.address) {
      alert("error")
      return
    }
    setDepositLoading(true)
    try {
    const response = await fetch("https://eskanor.com.ng/Api/Api/create_plan.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        userId:depositDetails.userId,
        userName:depositDetails.username,
        investmentType:depositDetails.investmentType,
        package:depositDetails.package,
        address:depositDetails.address,
        amount:depositDetails.amount,
        hash:depositDetails.hash
    }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
   if (data.status) {
      setDepositModal(true)
      setDepositLoading(false)

    }

    
    // console.log('Success:', data);
  } catch (error) {
    alert("an error occured,retry again")
    // console.log('Error:', error);
  }
  };

useEffect(()=>{
console.log(depositDetails);
console.log(depositDetails.amount);

},[depositDetails])
useEffect(()=>{
  if (depositModal) {
    return
  }
      setDepositDetails({
         userId:null,
        username:null,
        investmentType:null,
        package:null,
        address:null,
        amount:undefined,
        hash:undefined
      })
},[depositModal])

  useEffect(()=>{
setDepositDetails({...depositDetails,userId:userInfo.id,username:userInfo.username,package:chosenPlan.package})
console.log(depositDetails);

  },[depositDetails.amount,depositDetails.address,depositDetails.hash])

  useEffect(()=>{
// console.log(walletAddresses);
console.log();
sessionStorage.setItem("selectedPackage",id)
console.log();
if (id.includes("investment")) {
  setDepositDetails({...depositDetails, investmentType:"investment"})
  const getSelectedPackage = sessionStorage.getItem("selectedPackage")
  const findActualType = dataForInvestmentsPlans.find(item => item.id == id.slice(-1) || getSelectedPackage)
  console.log("type",findActualType);
  if (findActualType) {
    sessionStorage.setItem("selectedPlan",JSON.stringify(findActualType))
  }
  setChosenPlan(findActualType || JSON.parse(sessionStorage.getItem("selectedPlan")))
  
}
else{
  setDepositDetails({...depositDetails, investmentType:"minning"})
  const findActualType = dataForMinningPlans.find(item => item.id == id.slice(-1))
  console.log("type",findActualType);
  if (findActualType) {
    sessionStorage.setItem("selectedPlan",JSON.stringify(findActualType))
  }
  setChosenPlan(findActualType || JSON.parse(sessionStorage.getItem("selectedPlan")))
}
  },[])
   
return (
    <div className="px-2 my-4">
     {depositModal && <DepositModal amountSent={depositDetails.amount} />}
         <article className='flex flex-col gap-y-8 md:flex-row md:flex-wrap'>
      
        <div className={`w-[75%] md:w-[40%] xl:w-[22%] mx-auto h-[550px]  border-[1px] ${id.includes("investment") ? "border-blue"  : "border-yellow"}  `}>
        <section className={`${id.includes("investment") ? "bg-blue"  : "bg-yellow"} h-[50%] py-9 flex flex-col justify-evenly text-white items-center uppercase`}>
        <span className='md:text-[1.6rem] text-[1rem]'>{chosenPlan.package}</span>
        <span className='md:text-[4rem] text-[3rem]'>{chosenPlan.percentage}</span>
        <span className='md:text-[1.6rem]  text-[1rem]'>{chosenPlan.returns}</span>
        </section>
        <section className='flex flex-col items-center h-[50%] justify-evenly py-2'>
        <aside className={`flex flex-col  ${id.includes("investment") ? "text-blue"  : "text-yellow"} `}>
        <span>Minumum Deposit ${chosenPlan.min_dep}</span>
        <span>Maximum Deposit ${chosenPlan.max_dep}</span>
        </aside>
        <button className={` ${id.includes("investment") ? "bg-blue"  : "bg-yellow"}  text-white md:w-[70%] w-[55%] md:py-4  py-2 rounded-lg md:text-[1.5rem] text-[1.4rem]`}>Deposit</button>
        </section>
        </div>
    </article>

    <div className="" >
    <p className="text-center">copy the wallet address you want to deposit to</p>
        <div>

        {walletAddresses.map((item,index)=>{
            
            return(
                <aside key={index} className="flex items-center justify-between border-black border-[1px]  my-4 px-2 xl:text-lg py-2 xs:py-0">
<span className="w-[20%] xs:text-[0.8rem] xxs:text-[0.65rem]  text-[0.5rem] font-semibold ">{item.coin_name}</span> <p className="w-[70%] text-wrap xs:text-[0.7rem] text-[0.5rem] wrap  xl:text-[1.5rem] xxs:text-[0.6rem] md:text-[1rem] xl:tracking-widest md:tracking-wide ">{item.address}</p> 
<button
onClick={(e)=>{
  e.stopPropagation()
 navigator.clipboard.writeText(item.address).then(() => {
      alert(" copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });

}}
className="p-2 active:bg-blue">
    <FaRegCopy className="text-[0.8rem]" />
</button>
                </aside>
            )
        })}

        </div>

<form className="flex flex-col" onSubmit={postData}>
  <>
<label htmlFor="amount">Amount</label>
        <input type="text"
        name="amount"
        placeholder="enter amount"
        value={depositDetails.amount ? depositDetails.amount : ""}
        onChange={(e)=> setDepositDetails({...depositDetails,[e.target.name]:e.target.value}) }
        className="border-black border-[1px] py-[6px] my-2 px-2 w-full "
        />
        </>
          <>
<label htmlFor="">Address you transferred from</label>
        <input type="text"
        name="address"
        placeholder="your address"
        value={depositDetails.address ? depositDetails.address : ""}
        onChange={(e)=> setDepositDetails({...depositDetails,[e.target.name]:e.target.value}) }
        className="border-black border-[1px] py-[6px] my-2 px-2 w-full "
        />
        </>
        <>
         <label htmlFor="hash">enter the transaction hashkey to confirm your transaction</label>
        <input type="text"
        id="hash"
        name="hash"
        placeholder="hashkey"
        value={depositDetails.hash ? depositDetails.hash : ""}
        onChange={(e)=> setDepositDetails({...depositDetails,[e.target.name]:e.target.value}) }
        className="border-black border-[1px] py-[6px] my-2 px-2 w-full"
        />
        </>
        <p className="text-[red] text-center mx-auto text-[0.8rem] w-[80%] leading-3 mb-8">Click on confirm after you have sent crypto from your wallet!</p>
      <aside className="flex justify-center items-center">
          <button 
        type="submit"
        className={`${id.includes("investment") ? "bg-blue"  : "bg-yellow"} w-[50%] h-[40px] rounded-md text-white flex justify-center items-center hover:bg-opacity-50 focus:bg-opacity-50 `}
        >
         {depositLoading ? <img src="/images/white-spinner.svg" alt="spinner" className='w-[30px] h-[30px]' />  : "send"}
        </button>
      </aside>
</form>
    </div>

    </div>
)

}



// const addresses = [
// {
//     id:1,
//     coinName:"Bitcoin",
//     address:"bc1q9jn4p4kpvx636xjlu37dudde8chld9x5ppcmmz"
// },
// {
//     id:2,
//     coinName:"USDT(ERC20)",
//     address:"0x8471BE8ebe9F14d4038c619395C9915E91DA068d"
// },
// {
//     id:1,
//     coinName:"Etherium",
//     address:"0x8471BE8ebe9F14d4038c619395C9915E91DA068d"
// },
// ]







export default Deposit