import React from 'react'
import About from './About'
import OurClient from './OurClient'
import Count from './Count'

export default function MainAbout() {
  return (
    <div className='bg-black text-white '>

      <About></About>
      <div className='bg-[#161616] py-28  mt-20'>
      <OurClient></OurClient>
      <Count></Count>
      </div>
    </div>
  )
}
