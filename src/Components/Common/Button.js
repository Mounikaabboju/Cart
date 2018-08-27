import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <button title={this.props.title} />
        <button title={"Add to cart"} />
        <button title={"Remove Item"} />
        <button title={"view details"} />
      </div>
    );
  }
}
export default Button;
