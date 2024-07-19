import React, { useState } from 'react';

function DashboardIndexPage() {
  const [bt, setbt] = useState('กดปุ่ม')
  const handleClick = () => {
    console.log('submit')
    setbt('สำเร็จ')
  }
  return (
    <div className='flex justify-center flex-col gap-4 h-full w-full p-10'>
       <h1 className='text-3xl font-bold'>Dashboard Index Page</h1>

       <button type='button' className='btn btn-primary w-[150px]' onClick={handleClick}>{bt}</button>

       <p data-testid='paragraph-blue' className='text-blue text-xl font-bold'>Hello world</p>
    </div>
  )
}

export default DashboardIndexPage