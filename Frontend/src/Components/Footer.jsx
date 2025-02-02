import React from 'react'


const Footer = () => {
  return (
    <div className='mx-20 py-6 font-[sora]'>
        <div className='pb-6 mb-6 border-b border-[#777777] flex justify-around items-center gap-8 '>
            <div className='w-[90px] h-[65px]'>
                <img src='/ewheelersLogo.png' alt='logo' />
            </div>
            <div className='flex flex-row gap-6 text-sm '>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'>Terms and Conditons</div>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'> Privacy Policy</div>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'> Return Policy</div>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'>Store Locator </div>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'>Blog</div>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'> Contact Us</div>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'>About Us</div>
              <div className='hover:text-red-900 whitespace-nowrap cursor-pointer'>Partner With Us</div>
            </div>
        </div>
        <div className='new-div w-full flex items-center justify-center'>
            <div className=' text-xs '>Copyright © 2022 eWheelers Mobility Solutions Pvt. Ltd.</div>
        </div>
    </div>
  )
}

export default Footer
