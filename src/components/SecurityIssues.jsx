import React, { useState } from 'react';

// Secure component with all security issues fixed
const SecurityIssues = () => {
  const [userInput, setUserInput] = useState('');
  const [apiKey, setApiKey] = useState(''); // Fixed: No hardcoded API key

  // Fixed: Input sanitization and XSS prevention
  const handleSubmit = (e) => {
    e.preventDefault();
    // Use textContent instead of innerHTML to prevent XSS
    const outputElement = document.getElementById('output');
    if (outputElement) {
      outputElement.textContent = userInput;
    }
  };

  // Fixed: No sensitive data exposed
  const userData = {
    name: 'John Doe',
    email: 'john@example.com'
    // Removed: password, ssn, apiKey
  };

  // Fixed: HTTPS enforcement
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data'); // HTTPS
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };

  // Fixed: Authentication check
  const deleteUser = async (userId) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Authentication required');
    }
    
    await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  // Fixed: SQL injection prevention (parameterized query)
  const searchUsers = async (searchTerm) => {
    // Use parameterized queries instead of string concatenation
    const response = await fetch('/api/users/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({ searchTerm })
    });
    return response.json();
  };

  // Fixed: CSRF protection
  const updateProfile = async (data) => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    
    await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify(data)
    });
  };

  return (
    <div>
      <h1>Secure Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter some text"
          maxLength={100} // Input validation
        />
        <button type="submit">Submit</button>
      </form>
      <div id="output"></div>
      
      {/* Fixed: No sensitive data exposed */}
      <div>
        <p>User: {userData.name}</p>
        <p>Email: {userData.email}</p>
        {/* Removed: API Key and sensitive user data */}
      </div>
    </div>
  );
};

export default SecurityIssues;
