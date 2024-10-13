import React from 'react'

const Withdrawal = () => {
  return (
  <article className ="px-4 font-poppins my-16">
    <p className='text-lg font-medium my-8'>Choose a Withdrawal method</p>
    <div className="space-y-8  text-sm">
<article className="border-[1px] border-gray rounded-sm px-2 py-4 md:py-6 font-poppins">

  {/* BTC */}
  <aside className="flex justify-between items-start border-b-[1px] border-gray">
  <span>BTC</span>
  <span>0.00</span>
  </aside>

  {/* USD */}
  <aside className="flex justify-between">
  <span>USD</span>
  <span className="text-[red]">$0.00</span>
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
  <span className="text-[red]">$0.00</span>
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
  <span className="text-[red]">$0.00</span>
  </aside>
</article>
</div>


{/* form */}

<form action="" className='space-y-10 my-10 text-sm '>
    <div>
    <label htmlFor="" className='my-2 block'>Enter your wallet address</label>
    <input type="text"
     value={"yea"}
     className='h-16 border-[2px] border-gray w-full px-2 md:w-[616px] xl:w-[773px]'
     />
    <p className='text-sm text-[red] mt-2'> paste only preferred wallet available in your assets</p>
    </div>

    <div>
    <label htmlFor="" className='my-2 block'>Enter amount</label>
    <input type="text"
    value={"yea"} 
     className='h-16 border-[2px] border-gray w-full px-2  md:w-[509px]  xl:w-[773px] '
    />
    </div>
<div className='flex flex-col items-center md:items-start'>
    <button type='submit' className='bg-blue text-white w-[147px] h-[47px]'>Withdraw</button>
</div>
</form>
  </article>
  )
}

export default Withdrawal
