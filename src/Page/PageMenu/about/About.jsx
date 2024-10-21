import React from 'react'
import Head from '../../../Shared/Head'

export default function About() {
  return (
    <div>
        <Head title='About Us'></Head>
      <div className='grid grid-cols-2 mt-11 max-w-[1400px] m-auto '>
        <div>
          <div className='m-6'>
            <h3 className='font-medium'>WHO WE ARE</h3>
            <h1 className='text-6xl py-5 font-semibold'>We create a new approach to sport</h1>
            <p className='text-zinc-500'>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna.</p>
          </div>
        </div>
        <div>
          <div className='m-6'>
          <div className="progress-bars">
          <div className="progress-bar">
            <span className="progress-title ">Crossfit</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: '80%' }}></div>
            </div>
            <span className="progress-percentage">80%</span>
          </div>
          <div className="progress-bar">
            <span className="progress-title">Cardio</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: '90%' }}></div>
            </div>
            <span className="progress-percentage">90%</span>
          </div>
          <div className="progress-bar">
            <span className="progress-title">Yoga</span>
            <div className="progress">
              <div className="progress-fill" style={{ width: '85%' }}></div>
            </div>
            <span className="progress-percentage">85%</span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
