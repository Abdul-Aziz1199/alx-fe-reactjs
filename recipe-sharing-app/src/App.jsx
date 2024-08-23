import React from 'react';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

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
