import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <div className='font-roboto text-white  max-w-[600px] m-auto text-center'>
      <div className='text-center my-4'>
        <p className='text-4xl '>Hey!</p>
      </div>
      <div className='text-2xl mb-5'>
        <p>I'm <span className='font-bold'>Gaurav</span> The Creator and Developer of this website.</p>
      </div>
      <div className='text-xl'>
        <p>Trying to contact with me?</p>
        <p>Go to <Link to='/contact'><span className='text-blue-300 cursor-pointer'>Contact</span></Link> Page</p>
      </div>
    </div>
  )
}

export default About