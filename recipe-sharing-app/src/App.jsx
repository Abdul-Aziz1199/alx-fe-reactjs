import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // Import the SearchBar component

// Main application component
function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />  {/* Add SearchBar component to the layout */}
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Route for recipe list */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} /> {/* Route for recipe details */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
