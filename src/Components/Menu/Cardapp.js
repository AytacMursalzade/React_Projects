import React from 'react'

function Cardapp({name,icon}) {
  return (
    <div className='flex justify-center items-center text-[navy] my-[100px] w-[150px] h-[180px] mx-[80px] rounded-[7px] border border-[#1C1C1C] cursor-help'>
      <div className='w-[20px] text-center '><b><p>{name}</p></b></div>
      
      <div>
      <b><p className='w-[50px] position relative left-[60px] top-[70px] '>{icon}</p></b>
        </div>     
    </div>
  )
}

export default Cardapp
