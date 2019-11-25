import React from "react";
import "./Order.css";

const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          padding: "5px",
          border: "1px solid #ccc",
          margin: "2px",
          paddingleft: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className="Order">
      <p>Ingredients: {ingOutput} </p>
      <p>
        Price: <strong>Rs {props.price}</strong>{" "}
      </p>
    </div>
  );
};

export default order;
