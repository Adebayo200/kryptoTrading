import React, { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
    const [userInfo,setUserInfo] = useState({})
    const [userCreated,setUserCreated] = useState(false)


    // Sign Up Functionality
    const postData = async (e) => {
    e.preventDefault()
    try {
    const response = await fetch('https://eskanor.com.ng/Api/Api/signup.php', {
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

    if (!response.ok) {
    throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Success:', data);
    console.log('Status:', data.status);
    if (data.status) {
        alert(data.message)
        setUserCreated(true)
    }
    } catch (error) {
        alert("error")
    console.error('Error:', error);
    }
    };


    useEffect(()=>{
    console.log(userDetails);
    },[userDetails])




    // signIn Fuctionality
    const signIn = async (e) => {
    e.preventDefault()
    try {
    const response = await fetch('https://eskanor.com.ng/Api/Api/login.php', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
    email:userLoginDetails.email,
    pwd:userLoginDetails.password,
    }),
    });

    if (!response.ok) {
    throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Success:', data);
    setUserActive(data.status)
    setUserInfo(data.data)
    } catch (error) {
    console.error('Error:', error);
    }
    };


useEffect(()=>{
console.log(userLoginDetails);
},[userLoginDetails])



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
            setUserCreated
        }}
        >
            {children}
        </UserContext.Provider>
    )
} 

export {UserContext,UserProvider}