// src/services/githubService.js
import axios from 'axios';

// Function to fetch GitHub user data by username
export const fetchUserData = async (username) => {
  // GitHub API URL for fetching a single user by username
  const url = `https://api.github.com/users/${username}`;

  try {
    // Perform the API request using Axios
    const response = await axios.get(url);
    return response.data;  // Return the API response data
  } catch (error) {
    throw new Error('Error fetching user data from GitHub API');
  }
};

// Function to fetch GitHub users based on advanced search criteria
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  // Construct the query string for the GitHub Search API
  let query = `q=${username}`;  // Start with the username query

  // Append location to the query if provided
  if (location) {
    query += `+location:${location}`;
  }

  // Append minimum repositories to the query if provided
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  // GitHub Search API endpoint for advanced search
  const url = `https://api.github.com/search/users?${query}`;

  try {
    // Perform the API request using Axios
    const response = await axios.get(url);
    return response.data;  // Return the API response data
  } catch (error) {
    throw new Error('Error fetching advanced user data from GitHub API');
  }
};
