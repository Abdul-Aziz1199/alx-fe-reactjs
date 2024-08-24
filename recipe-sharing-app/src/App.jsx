import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // Create this component for detailed view

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} /> {/* Recipe list at the root */}
        <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Dynamic route for individual recipe */}
      </Routes>
    </Router>
  );
};

export default App;
