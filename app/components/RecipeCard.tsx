import React from "react";

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
      <p className="mb-2">{recipe.description}</p>
      <h3 className="font-semibold">Ingredients:</h3>
      <ul className="list-disc list-inside mb-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="font-semibold">How to Prepare:</h3>
      <p className="mb-2">{recipe.how_to_prepare}</p>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        {recipe.category}
      </span>
      <button
        onClick={() => onDelete(recipe.id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
      >
        Delete
      </button>
    </div>
  );
};

export default RecipeCard;
