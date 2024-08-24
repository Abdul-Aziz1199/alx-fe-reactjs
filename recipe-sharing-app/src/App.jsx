import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        
        {/* Add the AddRecipeForm component to allow adding recipes */}
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Recipe list at the root */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Dynamic route for individual recipe */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
