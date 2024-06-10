import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'



function Home() {

const accountInput = useRef(null)
const [userId,setUserId] = useState('IzzMehh')

const label = useRef(null)

  return (
    <div className='mt-32'>
      <div className='text-center mb-7 flex justify-center'>
        <div className='w-[500px] relative'>
        <input
        onChange={(e)=>{ 
          (e.target.value === '') ? setUserId('IzzMehh') : setUserId(e.target.value)
        }} required
         ref={accountInput} className='p-2 w-[90%] sm:w-full  input bg-transparent border-2 text-white outline-none rounded-lg font-roboto text-lg font-semibold'/>

        <label ref={label} className='absolute label left-[40px] top-[10px] sm:left-[10px] sm:top-[9px] pointer-events-none px-2 text-[#9CA6B7] font-roboto text-lg font-semibold' htmlFor="">Github Username</label>
        </div>
      </div>
      
      <div className='text-center'>
        <Link
        to={`github/${userId}`}
        
        ><button
        className='px-20 py-3 font-roboto font-semibold bg-green-500 hover:bg-green-400 rounded-lg text-xl'>Search</button></Link>
      </div>
    </div>
  )
}
export default Home