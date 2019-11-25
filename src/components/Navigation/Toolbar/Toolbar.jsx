import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigatonItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked ={props.drawerToggleCilcked} />
    <div className="Logo1">
      <Logo />
    </div>

    <nav className="DesktopOnly">
      <NavigatonItems />
    </nav>
  </header>
);

export default toolbar;
