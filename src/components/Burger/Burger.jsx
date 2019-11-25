import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import { withRouter } from "react-router-dom";

const burger = props => {
  let transformIngredient = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformIngredient.length === 0) {
    transformIngredient = (
      <p style={{ color: "darkred" }}>Please start adding Ingredients</p>
    );
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);
