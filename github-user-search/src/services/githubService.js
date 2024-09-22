// src/services/githubService.js
import axios from 'axios';

// Function to fetch GitHub users based on username and location
export const fetchAdvancedUserData = async (username, location) => {
  const query = `q=${username}+location:${location}`;  // Construct query with username and location
  const url = `https://api.github.com/search/users?${query}`;
  
  const response = await axios.get(url);
  return response.data;  // Return API data
};
