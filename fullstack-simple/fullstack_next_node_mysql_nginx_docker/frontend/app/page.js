import { use } from 'react';
async function getData()  {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
    console.log('Fetching from:', backendUrl);
    console.log('Fetching data from backend...');
    const res = await fetch(`${backendUrl}/api/data`, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response status:', res.status);
    return res.json();
}

export default function Home() {
  const data = use(getData());

  return (
    <main>
      <h1>Welcome to my Full Stack App</h1>
      <p>Data from backend: {data.message}</p>
    </main>
  );
}