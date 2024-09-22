// src/App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(searchParams);
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we can't find the user.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 border border-gray-200 rounded">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h2 className="text-center text-xl font-semibold mt-2">{user.login}</h2>
            <p className="text-center">Location: {user.location || 'N/A'}</p>
            <p className="text-center">Repos: {user.public_repos || 'N/A'}</p>
            <p className="text-center mt-2">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View GitHub Profile
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
