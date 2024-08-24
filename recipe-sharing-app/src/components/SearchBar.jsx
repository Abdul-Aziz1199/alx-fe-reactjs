import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  // Access the action to set the search term from the Zustand store
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      style={{ margin: '20px', padding: '10px', width: '300px' }} // Inline styling for the search bar
    />
  );
};

export default SearchBar;
