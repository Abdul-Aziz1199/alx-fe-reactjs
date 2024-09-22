// src/services/githubService.js
import axios from 'axios';

// Function to fetch GitHub users based on username, location, and minimum repositories
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  // Construct the query string for GitHub's Search API
  let query = `q=${username}`;  // Start with the username query

  // If location is provided, add it to the query
  if (location) {
    query += `+location:${location}`;
  }

  // If minRepos is provided, add it to the query
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  // GitHub Search API endpoint
  const url = `https://api.github.com/search/users?${query}`;
  
  // Perform the API request using Axios
  const response = await axios.get(url);
  return response.data;  // Return the API response data
};
