import React from "react";
import Cart from "../Cart/Cart";
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>JSKart</h1>
        <Cart />
      </div>
    );
  }
}
export default Header;
