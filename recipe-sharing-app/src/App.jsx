import React from 'react';
import RecipeList from 'src/components/RecipeList'
import AddRecipeForm from 'src./components/AddRecipeForm';

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
