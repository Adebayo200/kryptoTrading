import React, { Children, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataControlContext } from "./DataControlContext";


const UserContext = createContext()

const UserProvider = ({children})=>{
 const [userLoginDetails,setUserLoginDetails] = useState({
        password:"",
        email:"",
    })
    const [userDetails,setUserDetails] = useState({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        username:""
    })
    const [userActive,setUserActive] = useState(false)
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("myInfos")) || {
    created_at: "",
    email: "",
    first_name: "",
    id: "",
    last_name: "",
    pwd: "",
    pwd_token: "",
    username: ""
})
    const [userCreated,setUserCreated] = useState(false)
    const [userLoading,setUserLoading] = useState(false)
     const {showSignUpModal,setShowSignUpModal,toggleSignUpModal,showChangePasswordModal,
setShowChangePasswordModal,} = useContext(DataControlContext)
     const [changePasswordDetails,setChangePasswordDetails] = useState({
        id:undefined,
        currentPassword:undefined,
        newPassword:undefined,
    })
  


    // Sign Up Functionality
    const postData = async (e) => {
        e.preventDefault()
        if (userDetails.password < 8) {
            alert("password too short")
            return
        }
        if (userLoading) {
            return
        }
    setUserLoading(true)
    try {
    const response = await fetch('https://kryptotradingbackend.com.ng/Api/signup.php', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
    firstName:userDetails.firstName,
    lastName:userDetails.lastName,
    email:userDetails.email,
    userName:userDetails.lastName,
    pwd:userDetails.password,
    }),
    });

    // if (!response.ok) {
    // throw new Error('Network response was not ok');
    // }

    const data = await response.json();
    if (data.status) {
        // alert(data.message)
        console.log(data);
        
        setUserLoading(false)
        setShowSignUpModal(true)
        setUserCreated(true)
        setUserDetails({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        username:""
    })
    }
    // console.log('Success:', data);
    // console.log('Status:', data.status);
    } catch (error) {
        alert("error")
        setUserLoading(false)
    console.error('Error:', error);
    }
    };


    useEffect(()=>{
    console.log(userDetails);
    },[userDetails])




    // signIn Fuctionality
    const signIn = async (e) => {
     
    e.preventDefault()

    
    if (!userLoginDetails.password || !userLoginDetails.email) {
        alert("empty field")
        return
    }
       if (userInfo.email) {
        alert("you're already signed in")
            return
        }
    setUserLoading(true)
    try {
    const response = await fetch('https://kryptotradingbackend.com.ng/Api/login.php', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
    email:userLoginDetails.email,
    pwd:userLoginDetails.password,
    }),
    });
console.log();

    if (!response.ok) {
        alert("something went wrong,please try again")
         setUserLoading(false)
         throw new Error('Network response was not ok');
         return
        }
        
        const data = await response.json();
        
        if (!data.status) {
        setUserLoading(false)
        alert("something went wrong,please try again")
    }
    if (data.status) {
        console.log('Success:', data);
        setUserActive(data.status)
        setUserLoading(false)
        localStorage.setItem("myInfos",JSON.stringify(data.data))
        setUserInfo(data.data)
    }
} catch (error) {
        setUserLoading(false)
        alert(error.message)
    console.error('Error:', error);
    }
    };


// CHANGE PASSWORD
const changePassword = async (e) => {
    e.preventDefault()
if (changePasswordDetails.newPassword.length < 8) {
    alert("password too short")
    return
}

      if (userLoading) {
            return
        }
    setUserLoading(true)
    if (!changePasswordDetails.id || !changePasswordDetails.currentPassword || !changePasswordDetails.newPassword) {
        return
    }
    try {
    const response = await fetch("https://kryptotradingbackend.com.ng/Api/update_password.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        id:changePasswordDetails.id,
        currentPassword:changePasswordDetails.currentPassword,
        newPassword:changePasswordDetails.newPassword,
    }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
      setUserLoading(false)

    }

    const data = await response.json();
    if (response.ok) {
        if (data.status) {
            setUserLoading(false)
            setShowChangePasswordModal(true)
        }
      if (!data.status) {
          alert(data.message)
          setUserLoading(false)
      }
        console.log('Success:', data);
    }
  } catch (error) {
    console.log('Error:', error);
    alert("something went wrong")
    //  setUserLoading(false)
  }
  };



useEffect(()=>{
console.log(userInfo);

},[userLoginDetails,userInfo])



    return ( 
        <UserContext.Provider
        value={{
            signIn,
            userLoginDetails,
            setUserLoginDetails,
            userDetails,
            setUserDetails,
            postData,
            userActive,
            userInfo,
            userCreated,
            setUserCreated,
            userLoading,
            setUserLoading,
            changePassword,
            changePasswordDetails,
            setChangePasswordDetails
        }}
        >
            {children}
        </UserContext.Provider>
    )
} 

export {UserContext,UserProvider}