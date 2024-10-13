import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const FrequentlyAsked = () => {
const [answersToShow,setAnswersToShow] =useState([])

useEffect(()=>{
console.log(answersToShow);
},[answersToShow])
  return (
    <div className="my-8">
      <h1 className="text-center uppercase font-bold text-[0.9rem] md:text-xl ">Frequently Asked Questions</h1>
  <div className="mx-4">
    {quiestionsList.map((item,index)=>{

        return (
            <aside key={index} className="flex items-center flex-col">
            <div className="flex items-center  justify-between md:justify-start w-full my-2 md:gap-x-4">
<p className="font-semibold">{item.id}..{item.quest}</p>

<span
className=""
onClick={(e)=>{
    
const copyAnsersArray = [...answersToShow]
const checkForThisQuest = copyAnsersArray.findIndex(eachQuest => eachQuest === item.quest)
console.log(checkForThisQuest);
if (checkForThisQuest >= 0) {
    const removeFromArray =copyAnsersArray.filter(eachQuestToFilter => eachQuestToFilter !== item.quest)
setAnswersToShow(removeFromArray)
return
}
else if(checkForThisQuest < 0){
    copyAnsersArray.push(item.quest)
    setAnswersToShow(copyAnsersArray)
}

}}
>{answersToShow.some(compareQuest => compareQuest === item.quest) ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}</span>
            </div>
{answersToShow.some(compareQuest => compareQuest === item.quest) && (
  <p 
  className="text-sm md:text-md py-2 md:px-2"
  >{item.ans}</p>)}
            </aside>
        )
    })}
  </div>
    </div>
  )
}

export default FrequentlyAsked



const quiestionsList = [
{
    id:1,
    quest:"What cryptocurencies can i invest in Kryptotrade",
    ans:"- KrypToTrade offers a wide range of cryptocurrencies, including popular options like Bitcoin, Ethereum, and emerging altcoins. Our platform supports various trading pairs to help diversify your portfolio."
},
{
    id:2,
    quest:" Is my investment secure with KrypToTrade",
    ans:"- Yes, security is our top priority. We utilize advanced encryption, multi-factor authentication, and cold storage to protect your assets and personal information. Our platform also undergoes regular security audits to ensure the highest level of protection"
},
{
    id:3,
    quest:"How do I get started with investing on KrypToTrade",
    ans:" Getting started is easy! Simply sign up for an account, complete the verification process, and fund your account. From there, you can explore our investment plans, choose the one that suits your goals, and start trading."
},
{
    id:4,
    quest:"What support is available if I have questions or issues?",
    ans:" KrypToTrade offers 24/7 customer support through various channels, including live chat, email, and phone. Our dedicated support team is here to assist you with any questions or concerns you may have."
},
{
    id:5,
    quest:"Can I customize my investment strategy on KrypToTrade?",
    ans:" Absolutely! KrypToTrade offers a range of customizable investment plans to match your financial goals. Whether you're looking for long-term growth or short-term gains, our platform provides the tools and flexibility to tailor your investment strategy."
},

]