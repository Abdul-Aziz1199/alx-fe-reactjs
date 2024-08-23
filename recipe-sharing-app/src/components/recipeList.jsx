import { useRecipeStore } from './recipeStore';

const recipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    return (
        <div>
            {recipes.map(recipe => (
                <div key = {recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                     
                </div>
            ))}
        </div>
    )
};
export default recipeList;

