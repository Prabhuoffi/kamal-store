import React, { useState } from 'react';

// Security issues for PR review practice
const SecurityIssues = () => {
  const [userInput, setUserInput] = useState('');
  const [apiKey, setApiKey] = useState('sk-1234567890abcdef'); // Error 1: Hardcoded API key

  // Error 2: No input sanitization
  const handleSubmit = (e) => {
    e.preventDefault();
    // Directly using user input without sanitization
    document.getElementById('output').innerHTML = userInput;
  };

  // Error 3: Exposed sensitive data
  const userData = {
    password: 'user123', // Error: Plain text password
    ssn: '123-45-6789', // Error: Exposed SSN
    apiKey: apiKey
  };

  // Error 4: No HTTPS enforcement
  const fetchData = async () => {
    const response = await fetch('http://api.example.com/data'); // HTTP instead of HTTPS
    return response.json();
  };

  // Error 5: No authentication check
  const deleteUser = async (userId) => {
    await fetch(`/api/users/${userId}`, {
      method: 'DELETE'
      // No authentication headers
    });
  };

  // Error 6: SQL injection vulnerability (simulated)
  const searchUsers = (searchTerm) => {
    const query = `SELECT * FROM users WHERE name = '${searchTerm}'`; // SQL injection
  };

  // Error 7: No CSRF protection
  const updateProfile = async (data) => {
    await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Missing CSRF token
      },
      body: JSON.stringify(data)
    });
  };

  return (
    <div>
      <h1>Security Issues Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter some text"
        />
        <button type="submit">Submit</button>
      </form>
      <div id="output"></div>
      
      {/* Error 8: Exposed sensitive data in render */}
      <div>
        <p>API Key: {apiKey}</p>
        <p>User Data: {JSON.stringify(userData)}</p>
      </div>
    </div>
  );
};

export default SecurityIssues;
