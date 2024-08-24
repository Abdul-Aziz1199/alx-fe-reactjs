import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  ); // Find the recipe by ID

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* You can add more details like ingredients, preparation steps, etc. */}
    </div>
  );
};

export default RecipeDetails;
