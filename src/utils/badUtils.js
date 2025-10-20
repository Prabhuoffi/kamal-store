// Bad utility functions with intentional errors for PR review practice

// Error 1: No input validation
export const processUserData = (userData) => {
  return userData.name.toUpperCase();
};

// Error 2: Hardcoded values
export const calculatePrice = (basePrice) => {
  return basePrice * 1.2; // What is 1.2? Should be a constant
};

// Error 3: No error handling
export const fetchUserById = async (id) => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};

// Error 4: Inconsistent naming
export const get_user_email = (user) => {
  return user.emailAddress; // Inconsistent with camelCase
};

// Error 5: Side effects in utility function
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

// Error 6: No JSDoc comments
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Error 7: Magic numbers
export const isAdult = (age) => {
  return age >= 18; // Should be a constant
};

// Error 8: No default export
const helperFunction = () => {
  return 'helper';
};
