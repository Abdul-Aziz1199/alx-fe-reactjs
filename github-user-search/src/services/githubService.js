// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = username ? `user:${username}` : '';
    
    if (location) {
      query += ` location:${location}`;
    }
    
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }
    
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // Array of users
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
