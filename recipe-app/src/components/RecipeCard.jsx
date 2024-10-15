import React from 'react';

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={onSelect}>
      {/* Recipe Thumbnail */}
      <img 
        src={recipe.strMealThumb || 'https://via.placeholder.com/150'} // Fallback image if thumbnail is missing
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      {/* Recipe Info */}
      <div className="p-4">
        <h2 className="font-bold text-xl">{recipe.strMeal}</h2>
        <p className="text-gray-600">{recipe.strCategory} - {recipe.strArea}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
