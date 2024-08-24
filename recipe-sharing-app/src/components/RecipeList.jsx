import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from './recipeStore';
import Recipe from './Recipe'; // Assuming you have a Recipe component

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id}>
            {/* Link to the detailed recipe page */}
            <Link to={`/recipe/${recipe.id}`}>
              <Recipe recipe={recipe} />
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
