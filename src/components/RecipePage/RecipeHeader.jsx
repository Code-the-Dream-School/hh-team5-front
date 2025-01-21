// This component will show the title and cook time.
import React from "react";

const RecipeHeader = ({ title, cookTime }) => {
  return (
    <div className="recipe-header">
      <h1 style={{ color: "black", fontSize: "40px" }}>{title}</h1>
      <p style={{ textAlign: "left", padding: "0" }}>Cook Time: {cookTime}</p>
    </div>
  );
};

export default RecipeHeader;
