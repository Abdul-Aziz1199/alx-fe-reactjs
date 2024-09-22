import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);   // Set loading to true
    setError(null);     // Clear previous errors
    setUserData(null);  // Clear previous user data

    try {
      const data = await fetchUserData(searchTerm); // Call the API service
      setUserData(data); // Set the fetched user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub users..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error message when user not found */}
      {error && <p>{error}</p>} {/* This displays the error message */}

      {/* Display user data if found */}
      {userData && !error && (
        <div className="user-details">
          <img src={userData.avatar_url} alt={userData.login} className="user-avatar" />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
