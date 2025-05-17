import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='m-22 flex justify-between'>
      <div>
        <p className='pb-3.5 font-bold text-2xl'>Company</p>
        <p className='pb-3 pt-3 text-gray-500'>About Us</p>
        <p className='text-gray-500'>Carrers</p>
      </div>
      <div>
        <p className='pb-3.5 font-bold text-2xl'>View Website In </p>
      <p className='pb-3 pt-3 text-gray-500'>English</p>
      </div>
      <div>
        <p className='pb-3.5 font-bold text-2xl'>Need Help </p>
        <p className='pb-3 pt-3 text-gray-500'>Visit Help Centre</p>
        <p className='text-gray-500'>Feedback</p>
      </div>
      <div>
        <p className='pb-3.5 font-bold text-2xl'>Connect with us</p>
      </div>
    </div>
    <div className='m-22 text-xl font-bold pb-14 text-gray-400'>
        <p className='pb-2'>2025 STAR. All Rights Are Reserved.</p>
        <p>Terms of Use <span className='pl-3'>Privacy</span> <span className='pr-3 pl-3'>Policy</span> FAQ</p>
    </div>
    </div>
  
  )
}

export default Footer
