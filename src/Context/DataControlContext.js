import { createContext, useEffect, useRef, useState } from "react";



export const DataControlContext = createContext()

const DataControlProvider = ({children})=>{
  const [minningData,setMinnningData] = useState([])
  const [investmentData,setInvestmestData] = useState([])
  const [walletAddresses,setWalletAddresses] = useState([])
  const [loading,setLoading] = useState(false)
  const [minningDataLoading,setMinnningDataLoading] = useState(false)
  const [investmentDataLoading,setInvestmestDataLoading] = useState(false)
  const [navOpen, setNavOpen] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
      const [depositModal,setDepositModal] = useState(false)
      const [withdrawalModal,setWithdrawalModal] = useState(false)
    const [height,setHeight] = useState({
      contact:undefined,
      about:undefined,
      plans:undefined

    })

    const [allPlans,setAllPlans] = useState([])
    const footerDiv = useRef() 
    const aboutDiv = useRef()
    const planstDiv = useRef()

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  }
  const toggleChangePasswordModal = () => {
    setShowChangePasswordModal(!showChangePasswordModal);
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
 
// get addressses
  const getDepositAddresses = async()=>{
try {
    const response  = await fetch("https://kryptotradingbackend.com.ng/Api/addresses.php")
  
  
    if (response.ok) {
    const res  = await response.json()
    setWalletAddresses(res.data)
    return
  }
  // console.log(res);
} catch (error) {
  // console.log("something went wrong");
  
}


  } 

//   GET MINING PLANS
    const getMinningPlans =async ()=>{
      setInvestmestDataLoading(true)
      try {
          const response = await fetch("https://kryptotradingbackend.com.ng/Api/minings.php")
        console.log("from investmentData",response);
          if (response.ok) {
      const res = await response.json()
    setMinnningData(res.data)
    setMinnningDataLoading(false)
    }
    // console.log("for minning");
  } catch (error) {
    // alert("something went wrong")
    // console.log("an error occured");

        
      }
    // const response = await fetch("https://kryptotradingbackend.com.ng/Api/minings.php")
    // const res = await response.json()
    // console.log(res);
    // if (res.status) {
    // setMinnningData(res.data)
    // }
    // console.log("for minning");
    }

    // GET INVESTMENT PLANS
  const fetchInvestmentPlans = async()=>{
    setInvestmestDataLoading(true)
    try {
      const response = await fetch("https://kryptotradingbackend.com.ng/Api/investments.php")
      if (response.ok) {
  const res = await response.json()
  setInvestmestData(res.data)
  setInvestmestDataLoading(false)
  return
}
    } catch (error) {
      // alert("something went wrong")
      // console.log(error.message);
        // console.log("an error occured");
      
    }
// console.log(data);

  }


  useEffect(()=>{
    fetchAllPlans()
    getMinningPlans()
    fetchInvestmentPlans()
    getDepositAddresses()
  },[])


useEffect(()=>{
// console.log("check",!investmentDataLoading && !minningDataLoading);
if (investmentDataLoading || minningDataLoading) {
  setLoading(true)
}
else if (!investmentDataLoading && !minningDataLoading) {
  setLoading(false)
}

console.log(loading);

},[loading,investmentDataLoading,minningDataLoading])



  

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

//   useEffect(()=>{
// getMinningPlans()
//   },[])



    return (
        <DataControlContext.Provider value={{
            walletAddresses,
            setWalletAddresses,
            minningData,
            setMinnningData,
            investmentData,
            setInvestmestData,
            investmentDataLoading,
            minningDataLoading,
            loading,
            navOpen,
            setNavOpen,
            toggleNavbar,
            showSignUpModal, 
            setShowSignUpModal,
            toggleSignUpModal,
            height,
            setHeight,
            footerDiv,
             aboutDiv,
             planstDiv,
            showChangePasswordModal,
            setShowChangePasswordModal,
            toggleChangePasswordModal,
            depositModal,
            setDepositModal,
            withdrawalModal,
            setWithdrawalModal,
            allPlans,
            setAllPlans
            
        }} >
            {children}
        </DataControlContext.Provider>
    )
}

export default DataControlProvider