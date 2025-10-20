import React, { useState, useEffect } from 'react';

// Bad Example Component with intentional errors for PR review practice
const BadExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Error 1: Missing dependency in useEffect
  useEffect(() => {
    fetchData();
  }, []); // Missing 'fetchData' in dependency array

  // Error 2: Function not memoized, will cause re-renders
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Error 3: Console.log in production code
  console.log('Component rendered');

  // Error 4: Inline styles instead of CSS classes
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px'
  };

  // Error 5: No error boundary or fallback
  if (error) {
    throw new Error(error); // This will crash the app
  }

  // Error 6: No accessibility attributes
  return (
    <div>
      <h1>Bad Example Component</h1>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <p>Data: {data.name}</p>
          <button style={buttonStyle} onClick={fetchData}>
            Refresh Data
          </button>
        </div>
      )}
    </div>
  );
};

export default BadExample;
