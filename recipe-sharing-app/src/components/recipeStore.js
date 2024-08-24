import { create } from 'zustand';

// Create a Zustand store for managing recipes, search functionality, favorites, and recommendations
export const useRecipeStore = create(set => ({
  recipes: [], // Array to hold all recipes
  searchTerm: '', // Search term entered by the user
  filteredRecipes: [], // Array to hold recipes that match the search term
  favorites: [], // Array to hold the IDs of favorite recipes
  recommendations: [], // Array to hold recommended recipes based on favorites

  // Action to set the search term and filter recipes based on it
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to delete a recipe by ID
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    filteredRecipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId) // Also remove from favorites if deleted
  })),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ).filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate personalized recommendations based on the user's favorite recipes
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Simple random recommendation logic
    );
    return { recommendations: recommended };
  }),
}));

