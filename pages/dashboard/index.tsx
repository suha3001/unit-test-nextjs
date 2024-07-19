import React, { useState } from 'react';

// Define the base URL for the JSONPlaceholder API
const baseUrl = 'https://jsonplaceholder.typicode.com';

// Function to fetch posts
export async function fetchPosts() {
    try {
        const response = await fetch(`${baseUrl}/posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


function DashboardIndexPage() {
  const [bt, setbt] = useState('กดปุ่ม')
  const handleClick = () => {
    console.log('submit')
    setbt('สำเร็จ');
    fetchPosts();
  };

  return (
    <div className='flex justify-center flex-col gap-4 h-full w-full p-10'>
       <h1 className='text-3xl font-bold'>Dashboard Index Page</h1>

       <button data-testid='button-confirm' type='button' disabled className='btn btn-primary w-[150px]' onClick={handleClick}>{bt}</button>

       <p data-testid='paragraph-blue' className='text-blue text-xl font-bold'>Hello world</p>

       <p data-testid='paragraph-description' className='decription-hl text-xs font-medium'>คำอธิบาย</p>
    </div>
  )
}

export default DashboardIndexPage