"use client";
import SimpleDialog from 'components/input/dialog';
import SearchComponent from 'components/Search';
import React, { useState } from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts() {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

function subtract(a: number, b: number): number {
  return a - b;
}

function DashboardIndexPage(): JSX.Element {
  const [bt, setbt] = useState('Click');
  const handleClick = () => {
    console.log('submit');
    setbt('สำเร็จ');
    fetchPosts();
  };

  const [buttonText, setButtonText] = useState('Click');
  const handleButtonClick = () => {
    console.log('submit');
    setButtonText('สำเร็จ');
    fetchPosts();
  };

  const [showDialog, setShowDialog] = useState(false);

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.trim() === '') {
      setMessage('Username is required');
    } else {
      setMessage(`Form submitted successfully with username: ${username}`);
    }
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ name: string; address: string } | null>(null);

  const mockFetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData({
        name: 'John Doe',
        address: '1234 Elm Street, Springfield, USA'
      });
    }, 1000);
  };

  return (
    <div className='flex justify-center flex-col gap-4 h-full w-full p-10'>
      <h1 className='text-3xl font-bold'>Dashboard Index Page</h1>

      <button data-testid='button-confirm' type='button' disabled className='btn btn-primary w-[150px]' onClick={handleClick}>{bt}</button>

      <p data-testid='paragraph-blue' className='text-blue text-xl font-bold'>Hello world</p>

      <p data-testid='paragraph-description' className='decription-hl text-xs font-medium'>คำอธิบาย</p>
      <input type="text" value="text1" data-testid="input-text" />

      <p data-testid='paragraph-green' className='text-green text-xl font-bold'>Hello world</p>

      <form onSubmit={handleSubmit} data-testid="form">
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>

      <button data-testid='button-clickable' type='button' className='btn btn-primary w-[150px] mb-4' onClick={handleButtonClick}>{buttonText}</button>

      <SimpleDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
      />
      <button data-testid='button-open-dialog' type='button' className='btn btn-primary w-[150px] mt-6' onClick={() => setShowDialog(true)}>Open Dialog</button>
       
      <div>
        <h1>Product Search</h1>
        <SearchComponent />
      </div>

      <button data-testid='load-button' onClick={mockFetchData}>Load Data</button>
      {loading ? <p data-testid="loading">Loading...</p> : data && (
        <div data-testid="data">
          <p>Name: {data.name}</p>
          <p>Address: {data.address}</p>
        </div>
      )}
    </div>
  );
}

export { DashboardIndexPage, subtract };
