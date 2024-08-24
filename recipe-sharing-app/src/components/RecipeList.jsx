import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';
import Recipe from './Recipe'; // Import the Recipe component

// Component to display the list of recipes
const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes(); // Filter recipes when the component mounts or search term changes
  }, [filterRecipes]);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} /> // Use Recipe component to display each recipe
        ))
      ) : (
        <p>No recipes found</p> // Message when no recipes match the search term
      )}
    </div>
  );
};

export default RecipeList;
