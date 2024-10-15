import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = response.data.meals;
      if (data) {
        setRecipes(data);
        setError('');
      } else {
        setRecipes([]);
        setError('No recipes found');
      }
    } catch (error) {
      setError('An error occurred while fetching the recipes');
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchRecipes(query);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default App;
