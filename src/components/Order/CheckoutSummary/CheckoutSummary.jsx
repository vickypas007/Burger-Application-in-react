import React from "react";
import Burger from "../../Burger/Burger";
import "./CheckoutSummary.css";

const checkoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope itd testes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button
        className="btn btn-danger btn-md"
        onClick={props.checkoutCancelled}
      >
        CANCEL
      </button>
      <button
        className="btn btn-success"
        style={{ marginLeft: "10px" }}
        onClick={props.checkoutContinued}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default checkoutSummary;
