import React from 'react';

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">&times;</button>
        <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover mb-4" />
        <h3 className="font-bold text-lg mb-2">Ingredients:</h3>
        <ul>
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .map((i) => recipe[`strIngredient${i}`] && (
              <li key={i}>{recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}</li>
            ))}
        </ul>
        <h3 className="font-bold text-lg mt-4 mb-2">Instructions:</h3>
        <p>{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <div className="mt-4">
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Watch the tutorial on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
