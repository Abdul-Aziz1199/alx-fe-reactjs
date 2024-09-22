// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // Assuming the API call is defined in githubService.js

const Search = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Async function to handle API request
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      // Make async API call
      const data = await fetchUserData(username);  // `await` used here for async function
      setUsers(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error message if search fails */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Map over users array to display user details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="p-4 border border-gray-200 rounded">
              <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
              <h2 className="text-center text-xl font-semibold mt-2">{user.login}</h2>
              <p className="text-center">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View GitHub Profile
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
