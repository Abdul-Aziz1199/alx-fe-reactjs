import React from 'react';
import RecipeList from 'src/components/recipeList'
import AddRecipeForm from 'src./components/addRecipeForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
