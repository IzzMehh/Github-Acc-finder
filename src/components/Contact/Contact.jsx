import React from 'react'

function Contact() {
  return (
    <>
    <div className='text-white text-3xl text-center mt-5'>
        Contact Me:
    </div>
    <div className='text-white text-lg text-center sm:text-2xl mt-5 max-w-[400px] m-auto grid grid-cols-2 gap-5'>
        <div className='hover:scale-[1.05] hover:text-blue-300'>
            <a href="https://github.com/IzzMehh" target='_blank'> Github <span className='relative top-[5px]'> <ion-icon name="logo-github"></ion-icon></span> </a>
        </div>
        <div className='hover:scale-[1.05] hover:text-blue-300'>
            <a href="https://twitter.com/IrritatedBanda" target='_blank'> Twitter <span className='relative top-[5px]'><ion-icon name="logo-twitter"></ion-icon></span> </a>
        </div>
        <div className='hover:scale-[1.05] hover:text-blue-300'>
            <a href="https://www.instagram.com/not_gaurav09/" target='_blank'>  Instagram <span className='relative top-[5px]'><ion-icon name="logo-instagram"></ion-icon></span> </a>
        </div>
        <div className='hover:scale-[1.05] hover:text-blue-300'>
            <a href="https://github.com/IzzMehh/Github-Acc-finder" target='_blank'> Project Link <span className='relative top-[5px]'><ion-icon name="arrow-forward-outline"></ion-icon></span> </a>
        </div>
    </div>
    </>
  )
}

export default Contact