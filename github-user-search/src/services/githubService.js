// src/services/githubService.js
import axios from 'axios';

// Function to fetch GitHub users based on username, location, and minimum repositories
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  // Construct the query string for the GitHub Search API
  let query = `q=${username}`;  // Start with the username query

  // Append location to the query if it's provided
  if (location) {
    query += `+location:${location}`;
  }

  // Append minimum repositories to the query if it's provided
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  // GitHub Search API endpoint
  const url = `https://api.github.com/search/users?${query}`;
  
  try {
    // Perform the API request using Axios
    const response = await axios.get(url);
    return response.data;  // Return the API response data
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};
