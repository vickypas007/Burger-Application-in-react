import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sidedrawerToggleHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleCilcked={this.sidedrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
