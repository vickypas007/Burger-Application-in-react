import React from "react";
import "./Model.css";
import Aux from "../../hoc/Auxilary";
import BackDrop from "../BackDrop/BackDrop";

const model = props => (
  <Aux>
    <BackDrop show={props.show} clicked={props.ModelClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default model;
