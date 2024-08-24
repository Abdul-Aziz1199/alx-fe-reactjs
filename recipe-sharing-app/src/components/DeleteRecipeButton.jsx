import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);       // Delete the recipe
    navigate('/');               // Navigate to the home page or recipe list
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
