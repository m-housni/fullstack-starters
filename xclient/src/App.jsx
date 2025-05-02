import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching API'));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">🚀 DevBoard</h1>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}

export default App;
