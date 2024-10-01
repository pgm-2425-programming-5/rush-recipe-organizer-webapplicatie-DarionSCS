"use client";
import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import AddRecipeForm from "./AddRecipeForm";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [
      ...recipes,
      { ...newRecipe, id: recipes.length + 1 },
    ];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={deleteRecipe} />
        ))}
      </div>
      <AddRecipeForm addRecipe={addRecipe} />
    </div>
  );
};

export default Recipes;
