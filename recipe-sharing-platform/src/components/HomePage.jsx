import React, { useState, useEffect } from 'react';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded" />
            <h2 className="mt-2 text-xl font-semibold">{recipe.title}</h2>
            <p className="mt-1 text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

