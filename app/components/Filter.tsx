"use client";
import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import AddRecipeForm from "./AddRecipeForm";
import Filter from "./Filter";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      setRecipes(parsedRecipes);
      setFilteredRecipes(parsedRecipes);
    }
  }, []);

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [
      ...recipes,
      { ...newRecipe, id: recipes.length + 1 },
    ];
    setRecipes(updatedRecipes);
    setFilteredRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    setFilteredRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(
        recipes.filter((recipe) => recipe.category === category)
      );
    }
  };

  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  return (
    <div className="container mx-auto p-4">
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={deleteRecipe} />
        ))}
      </div>
      <AddRecipeForm addRecipe={addRecipe} />
    </div>
  );
};

export default Recipes;
