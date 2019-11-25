import React from "react";
import Aux from "../../../hoc/Auxilary";
import "./OrderSummary.css";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey} className="OrderList">
        <span style={{ textTransform: "capitalize" }}> {igKey} </span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3 style={{ textAlign: "center", color: "red" }}>Your Order </h3>
      <p>A delious burger with following ingredients : </p>
      <ul> {ingredientSummary}</ul>
      <p>
        <strong>Total Price : {props.price} </strong>
      </p>
      <center>
        <p>Continue to Checkout ?</p>
        <button
          className="btn btn-danger btn-md"
          style={{ marginLeft: "40px" }}
          onClick={props.purchaseCanceled}
        >
          CANCEL
        </button>
        <button
          className="btn btn-success"
          style={{ marginLeft: "40px" }}
          onClick={props.purchaseContinue}
        >
          CONTINUE
        </button>
      </center>
    </Aux>
  );
};

export default orderSummary;
