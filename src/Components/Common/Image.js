import React from "react";
import "./Common.css";

class Image extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <img
            style={{ width: this.props.width, height: this.props.height }}
            className="image-container"
            alt="image1"
            src="
http://thedishondesmoines.com/wp-content/uploads/2012/01/Chisme_Sign.png"
          />
        </h1>
      </div>
    );
  }
}
export default Image;
