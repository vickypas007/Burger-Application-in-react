import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = props => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];

  return (
    <div className="BuildControls">
      <p>Current Price : {props.currentPrice}</p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientSubtracted(ctrl.type)}
          disable={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
