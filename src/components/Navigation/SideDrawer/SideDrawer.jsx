import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import BackDrop from "../../../UI/BackDrop/BackDrop";
import Aux from "../../../hoc/Auxilary";

const sideDrawer = props => {
  let attechedclass = ["SideDrawer", "Close"];
  if (props.open) {
    attechedclass = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attechedclass.join(' ')}>
        <div className="Logo2">
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
