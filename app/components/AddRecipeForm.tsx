import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    how_to_prepare: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      ...newRecipe,
      ingredients: newRecipe.ingredients.split(","),
    });
    setNewRecipe({
      name: "",
      description: "",
      ingredients: "",
      how_to_prepare: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add a New Recipe</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={newRecipe.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Ingredients (comma separated)
        </label>
        <input
          type="text"
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">How to Prepare</label>
        <input
          type="text"
          name="how_to_prepare"
          value={newRecipe.how_to_prepare}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <input
          type="text"
          name="category"
          value={newRecipe.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
